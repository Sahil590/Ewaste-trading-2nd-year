import Container from 'react-bootstrap/Container'
import React from 'react';
import '../App.css';
import '../css/About.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

function About() {
  return (
    <div className='about'>
    
    
   <div className='back'>
    <h1>About E-trade</h1>
    
  
   <Image src="http://news.itu.int/wp-content/uploads/2018/04/elwaste-e1523350816941.jpg" fluid />
   
      <h2>We aim to help reduce the impact of ewaste on the earth.</h2>
     
     <p1>We were driven by the UN sustainable development goals 12 and 15 which are about responsible consumption and production and life on land. 
       As technology develops, we end up having a lot of new devices come into the market and this causes a huge problem when it comes to disposing old electronics 
       some people may give it people in their circle, but this is very few people who does this. We wanted to create a platform where we can give life to 
       old devices that people would usually throw away and end up in a land fill. We created a platform where users can show their old items to people who 
       may have a better use out of it or people who just want to dispose of it correctly and let them trade their items amongst themselves to ensure that the
        item does not go to waste.  </p1>
     
      <h3>Here are some facts about e-waste that are truely shocking</h3>
      <p>1. In 2009, discarded TVs, computers, peripherals (including printers, scanners, fax machines) mice, keyboards, and cell phones totaled about 2.37 million short tons.</p>
      <p>2. E-waste represents 2% of America's trash in landfills, but it equals 70% of overall toxic waste.</p>
      <p>3. 20 to 50 million metric tons of e-waste are disposed worldwide every year.</p>
      <p>4. Cell phones and other electronic items contain high amounts of precious metals like gold or silver. Americans dump phones containing over $60 million in gold/silver every year.</p>
      <p>5. A large number of what is labeled as "e-waste" is actually not waste at all, but rather whole electronic equipment or parts that are readily marketable for reuse or can be recycled for materials recovery.</p>
      <p>6. Only 12.5% of e-waste is currently recycled.</p>
      <p>7. For every 1 million cell phones that are recycled, 35,274 lbs of copper, 772 lbs of silver, 75 lbs of gold, and 33 lbs of palladium can be recovered.</p>
      <p>8. Recycling 1 million laptops saves the energy equivalent to the electricity used by 3,657 U.S. homes in a year.</p>
      <p>9. E-waste is still the fastest growing municipal waste stream in America, according to the EPA.</p>
      <p>10. It takes 530 lbs of fossil fuel, 48 lbs of chemicals, and 1.5 tons of water to manufacture one computer and monitor.</p>
      <p>11. Electronic items that are considered to be hazardous include, but are not limited to: Televisions and computer monitors that contain cathode ray tubes, LCD desktop monitors, LCD televisions, Plasma televisions, Portable DVD players with LCD screens.</p>

            
      </div> 
  
  </div>
      
     
    
  );
}

export default About;