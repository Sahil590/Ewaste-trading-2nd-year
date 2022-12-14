
# E-trader Community ewaste trading platfrom &middot; ![npm version](https://img.shields.io/npm/v/react.svg?style=flat) &middot; ![Bootstrap](https://img.shields.io/badge/Bootstrap-v5.0-yellowgreen.svg) &middot; ![Java](https://img.shields.io/badge/Java-v11.0-orange.svg)
We’re **raising awareness** and **providing insight** on the the rise of ewaste in our world today. This platform aims to inform people on how to dispose of ewaste safely and correctly **enabling people** to take action by reducing their environmental footprint. Users can trade their ewaste for vouchers and dicounts insetivising them to get rid of their ewaste. All the while collectively working towards the following UN Sustainable Development Goals:



## Built With
Component         | Technology
---               | ---
Frontend          | [React 17+](https://reactjs.org/) and [Bootstrap 5+](https://react-bootstrap.github.io/)
Backend           | [Spring Boot 2.4+](https://spring.io/projects/spring-boot) and [Java 11+](https://www.oracle.com/java/)
Security          | [Spring Security](https://spring.io/projects/spring-security) and [JWT](https://jwt.io/)
Auth              | Local, Google, and Facebook
Database          | [MySQL](https://www.mysql.com/)
Persistence       | [JPA](https://spring.io/projects/spring-data-jpa) and [Hibernate](https://www.baeldung.com/spring-boot-hibernate)
Client Build      | [npm](https://www.npmjs.com/)
Server Build      | [Maven](https://maven.apache.org/)
APIs              | [Google News](https://newsapi.org/) and [UserWay](https://userway.org/)


## Getting Started
### Prerequisites
* Node.js
* Eclipse or Visual Studio with Spring Tools
* Local MySQL Server


## Installation
### Local MySQL Server
1. Create a new schema named ```ggd-unsdg```.

![mysql](https://user-images.githubusercontent.com/72175303/112675847-9521f500-8e5f-11eb-922a-dc3c3791fd90.gif)


### Frontend
1. Clone the repo and ```cd``` into ggd-app-client.
2. Install NPM packages listed below in 'Required React Modules'

#### Required React Modules
Module                | Command
---                   | ---
npm                   | ```$ npm install```
React jVectorMap      | ```$ npm install react-jvectormap```
React Router          | ```$ npm install react-router-dom```
Bootstrap             | ```$ npm install react-bootstrap bootstrap```
Semantic UI           | ```$ npm install semantic-ui```
Material-UI           | ```$ npm install @material-ui/core```
@nivo/core            | ```$ npm install @nivo/core```
@nivo/bar             | ```$ npm install @nivo/bar```
@nivo/line            | ```$ npm install @nivo/line```
EmailJS               | ```$ npm install emailjs-com```
ReactCardFlip         | ```$ npm install react-card-flip```
React Facebook Login  | ```$ npm install react-facebook-login```
SweetAlert2           | ```$ npm install sweetalert2 sweetalert2-react-content```

### Backend
1. Import ggd-app-server into Eclipse or Visual Studio.
2. Amend ```application.properties``` accordingly (your server username and password).
````java
spring.datasource.url=jdbc:mysql://localhost:3306/ggd-unsdg
spring.datasource.username=root
spring.datasource.password=toor
````
