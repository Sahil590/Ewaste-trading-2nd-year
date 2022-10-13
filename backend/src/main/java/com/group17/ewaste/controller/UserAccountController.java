package com.group17.ewaste.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.group17.ewaste.model.ConfirmationToken;
import com.group17.ewaste.model.User;
import com.group17.ewaste.service.EmailSenderService;
import com.group17.ewaste.repository.ConfirmationTokenRepository;
import com.group17.ewaste.repository.UserRepository;

@Controller
public class UserAccountController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ConfirmationTokenRepository confirmationTokenRepository;
	
	@Autowired
	private EmailSenderService emailSenderService;
	
	BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
	
	//Registration
	@RequestMapping(value="/register", method=RequestMethod.GET)
	public ModelAndView displayRegistration(ModelAndView modelAndView, User user) {
		modelAndView.addObject("user", user);
		modelAndView.setViewName("register");
		return modelAndView;
	}
	
	@RequestMapping(value="/register", method=RequestMethod.POST)
	public ModelAndView registerUser(ModelAndView modelAndView, User user) {
		
		User existingUser = userRepository.findByEmailIgnoreCase(user.getEmail());
		
		if(existingUser != null) {
			modelAndView.addObject("message","This email already exists!");
			modelAndView.setViewName("error");
		}
		
		else {
			user.setPassword(encoder.encode(user.getPassword()));
			userRepository.save(user);
			
			ConfirmationToken confirmationToken = new ConfirmationToken(user);
			
			confirmationTokenRepository.save(confirmationToken);
			
			SimpleMailMessage mailMessage = new SimpleMailMessage();
			mailMessage.setTo(user.getEmail());
			mailMessage.setSubject("Complete Registration!");
			mailMessage.setText("To confirm your account, please click here : "
			+"http://localhost:8080/confirm-account?token="+confirmationToken.getConfirmationToken());
			
			emailSenderService.sendEmail(mailMessage);
			
			modelAndView.addObject("emailId", user.getEmail());
			
			modelAndView.setViewName("successfulRegisteration");
		}
		
		return modelAndView;
		
	}
	
	// Confirm registration
		@RequestMapping(value="/confirm-account", method= {RequestMethod.GET, RequestMethod.POST})
		public ModelAndView confirmUserAccount(ModelAndView modelAndView, @RequestParam("token")String confirmationToken) {
			ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);
			
			if(token != null)
			{
				User user = userRepository.findByEmailIgnoreCase(token.getUser().getEmail());
				user.setIsEnabled(true);
				userRepository.save(user);
				modelAndView.setViewName("accountVerified");
			}
			else
			{
				modelAndView.addObject("message","The link is invalid or broken!");
				modelAndView.setViewName("error");
			}
			
			return modelAndView;
		}	

		// Login
		@RequestMapping(value="/login", method=RequestMethod.GET)
		public ModelAndView displayLogin(ModelAndView modelAndView, User user) {
			modelAndView.addObject("user", user);
			modelAndView.setViewName("login");
			return modelAndView;
		}

		@RequestMapping(value="/login", method=RequestMethod.POST)
		public ModelAndView loginUser(ModelAndView modelAndView, User user) {
			
			User existingUser = userRepository.findByEmailIgnoreCase(user.getEmail());
			if(existingUser != null) {
				// use encoder.matches to compare raw password with encrypted password

				if (encoder.matches(user.getPassword(), existingUser.getPassword())){
					// successfully logged in
					modelAndView.addObject("message", "Successfully logged in!");
					modelAndView.setViewName("successLogin");
				} else {
					// wrong password
					modelAndView.addObject("message", "Incorrect password. Try again.");
					modelAndView.setViewName("login");
				}
			} else {	
				modelAndView.addObject("message", "The email provided does not exist!");
				modelAndView.setViewName("login");

			}
			
			return modelAndView;
		}
		
		// Logout
		@RequestMapping(value="/logout", method=RequestMethod.GET)
		public ModelAndView displayLogout(ModelAndView modelAndView, User user) {
			modelAndView.addObject("user", user);
			modelAndView.setViewName("logout");
			return modelAndView;
		}
		
		@RequestMapping(value="/logout", method=RequestMethod.POST)
		public ModelAndView logoutUser(ModelAndView modelAndView, User user) {	
			modelAndView.addObject("message", "Successfully Logged Out");
			modelAndView.setViewName("logout");
			return modelAndView;
		}
				
		/**
		 * Display the forgot password page and form
		 */
		@RequestMapping(value="/forgot-password", method=RequestMethod.GET)
		public ModelAndView displayResetPassword(ModelAndView modelAndView, User user) {
			modelAndView.addObject("user", user);
			modelAndView.setViewName("forgotPassword");
			return modelAndView;
		}

		/**
		 * Receive email of the user, create token and send it via email to the user
		 */
		@RequestMapping(value="/forgot-password", method=RequestMethod.POST)
		public ModelAndView forgotUserPassword(ModelAndView modelAndView, User user) {
			User existingUser = userRepository.findByEmailIgnoreCase(user.getEmail());
			if(existingUser != null) {
				// create token
				ConfirmationToken confirmationToken = new ConfirmationToken(existingUser);
				
				// save it
				confirmationTokenRepository.save(confirmationToken);
				
				// create the email
				SimpleMailMessage mailMessage = new SimpleMailMessage();
				mailMessage.setTo(existingUser.getEmail());
				mailMessage.setSubject("Complete Password Reset!");
				mailMessage.setFrom("nairobley@gmail.com");
				mailMessage.setText("To complete the password reset process, please click here: "
				+"http://localhost:8080/confirm-reset?token="+confirmationToken.getConfirmationToken());
				
				emailSenderService.sendEmail(mailMessage);

				modelAndView.addObject("message", "Request to reset password received. Check your inbox for the reset link.");
				modelAndView.setViewName("successForgotPassword");

			} else {	
				modelAndView.addObject("message", "This email does not exist!");
				modelAndView.setViewName("error");
			}
			
			return modelAndView;
		}


		@RequestMapping(value="/confirm-reset", method= {RequestMethod.GET, RequestMethod.POST})
		public ModelAndView validateResetToken(ModelAndView modelAndView, @RequestParam("token")String confirmationToken)
		{
			ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);
			
			if(token != null) {
				User user = userRepository.findByEmailIgnoreCase(token.getUser().getEmail());
				user.setIsEnabled(true);
				userRepository.save(user);
				modelAndView.addObject("user", user);
				modelAndView.addObject("emailId", user.getEmail());
				modelAndView.setViewName("resetPassword");
			} else {
				modelAndView.addObject("message", "The link is invalid or broken!");
				modelAndView.setViewName("error");
			}
			
			return modelAndView;
		}	

		/**
		 * Receive the token from the link sent via email and display form to reset password
		 */
		@RequestMapping(value = "/reset-password", method = RequestMethod.POST)
		public ModelAndView resetUserPassword(ModelAndView modelAndView, User user) {
			// ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);
			
			if(user.getEmail() != null) {
				// use email to find user
				User tokenUser = userRepository.findByEmailIgnoreCase(user.getEmail());
				tokenUser.setIsEnabled(true);
				tokenUser.setPassword(encoder.encode(user.getPassword()));
				// System.out.println(tokenUser.getPassword());
				userRepository.save(tokenUser);
				modelAndView.addObject("message", "Password successfully reset. You can now log in with the new credentials.");
				modelAndView.setViewName("successResetPassword");
			} else {
				modelAndView.addObject("message","The link is invalid or broken!");
				modelAndView.setViewName("error");
			}
			
			return modelAndView;
		}


		public UserRepository getUserRepository() {
			return userRepository;
		}

		public void setUserRepository(UserRepository userRepository) {
			this.userRepository = userRepository;
		}

		public ConfirmationTokenRepository getConfirmationTokenRepository() {
			return confirmationTokenRepository;
		}

		public void setConfirmationTokenRepository(ConfirmationTokenRepository confirmationTokenRepository) {
			this.confirmationTokenRepository = confirmationTokenRepository;
		}

		public EmailSenderService getEmailSenderService() {
			return emailSenderService;
		}

		public void setEmailSenderService(EmailSenderService emailSenderService) {
			this.emailSenderService = emailSenderService;
		}
	
}