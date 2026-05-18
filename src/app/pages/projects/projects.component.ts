import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [

    // =========================
    // Backend & Microservices
    // =========================

    {
      src: "assets/projects-images/blood-donation.png",
      name: "Online Blood Donation System",
      codeUrl: "https://github.com/Abdelrahman-Magdii/Nuqta.git",
      demoUrl: "https://nuqta-app.netlify.app",
      video: "",
      techUsed: [
        "Spring Boot",
        "Spring Security",
        "JWT Authentication",
        "PostgreSQL",
        "Redis",
        "Twilio SMS",
        "MapStruct",
        "Swagger",
        "JUnit",
        "GitHub Actions"
      ]
    },

    {
      src: "assets/projects-images/event-booking.png",
      name: "Event Booking System",
      codeUrl: "https://github.com/Abdelrahman-Magdii/Event-Booking-API.git",
      demoUrl: "https://documenter.getpostman.com/view/36966051/2sB2jAbTvh",
      video: "",
      techUsed: [
        "Spring Boot",
        "PostgreSQL",
        "JWT Authentication",
        "Spring Security",
        "Swagger",
        "Postman",
        "JUnit 5",
        "Docker",
        "GitHub Actions",
        "Heroku"
      ]
    },

    {
      src: "assets/projects-images/fraud-system.png",
      name: "Microservices Fraud Detection System",
      codeUrl: "https://github.com/Abdelrahman-Magdii/Microservices-Check-Fraud-Customers.git",
      demoUrl: "",
      video: "",
      techUsed: [
        "Spring Boot",
        "RabbitMQ",
        "Feign Client",
        "Eureka Server",
        "Spring Cloud Gateway",
        "Zipkin",
        "Docker",
        "Docker Compose"
      ]
    },

    {
      src: "assets/projects-images/ecommerce-microservices.png",
      name: "E-commerce Order Management System",
      codeUrl: "https://github.com/Abdelrahman-Magdii/E-commerce-Microservices.git",
      demoUrl: "",
      video: "",
      techUsed: [
        "Spring Boot",
        "Apache Kafka",
        "PostgreSQL",
        "MongoDB",
        "Eureka",
        "Spring Cloud Gateway",
        "Docker",
        "Docker Compose",
        "Microservices"
      ]
    },

    {
      src: "assets/projects-images/book-review.png",
      name: "Book & Review System API with GraphQL",
      codeUrl: "https://github.com/Abdelrahman-Magdii/GraphQL-API.git",
      demoUrl: "",
      video: "",
      techUsed: [
        "Spring Boot",
        "GraphQL",
        "MongoDB",
        "Docker"
      ]
    },

    {
      src: "assets/projects-images/shopping.png",
      name: "Shopping API",
      codeUrl: "https://github.com/Abdelrahman-Magdii/Shopping-API.git",
      demoUrl: "",
      video: "",
      techUsed: [
        "Spring Boot",
        "Spring Security",
        "JWT",
        "RESTful APIs",
        "MySQL",
        "Swagger",
        "MapStruct",
        "Lombok"
      ]
    },

    {
      src: "assets/projects-images/students.png",
      name: "Students Management System",
      codeUrl: "https://github.com/Abdelrahman-Magdii/Back-end-Students-API.git",
      demoUrl: "https://github.com/Abdelrahman-Magdii/Front-end-Students-API.git",
      video: "https://www.linkedin.com/posts/abdelrahman-magdii_springboot-angular-fullstackdevelopment-activity-7235945238836506624-hTg0",
      techUsed: [
        "Spring Boot",
        "JWT Authentication",
        "Swagger",
        "MySQL",
        "Angular",
        "Bootstrap"
      ]
    },

    {
      src: "assets/projects-images/react-ecommerce.png",
      name: "React E-Commerce Store",
      codeUrl: "https://github.com/Abdelrahman-Magdii/ecommerce-shop-React.git",
      demoUrl: "",
      video: "",
      techUsed: [
        "React",
        "Tailwind CSS",
        "React Router",
        "Context API",
        "Fake Store API",
        "React Icons"
      ]
    },

    // =========================
    // Frontend Projects
    // =========================

    {
      src: "assets/projects-images/1.png",
      name: "E-commerce Frontend",
      codeUrl: "https://github.com/Abdelrahman-Magdii/E-commerce-Angular.git",
      demoUrl: "https://abdelrahman-magdii.github.io/E-commerce-Angular/products",
      video: "https://www.linkedin.com/posts/abdelrahman-magdii_i-am-happy-to-share-with-you-final-project-activity-7094843648411897856-rqLY",
      techUsed: [
        "Angular",
        "TypeScript",
        "Bootstrap",
        "HTML",
        "CSS"
      ]
    },

    {
      src: "assets/projects-images/2.png",
      name: "Personal Portfolio",
      codeUrl: "https://github.com/Abdelrahman-Magdii/Portfolio.git",
      demoUrl: "https://abdelrahman-magdii.github.io/Portfolio.live/",
      video: "https://www.linkedin.com/posts/abdelrahman-magdii_activity-7208423002206568448-ilM4",
      techUsed: [
        "Angular",
        "Bootstrap",
        "HTML",
        "CSS"
      ]
    },

    {
      src: "assets/projects-images/specialDesign.png",
      name: "Special Design",
      codeUrl: "https://github.com/Abdelrahman-Magdii/Special_Design.git",
      demoUrl: "https://abdelrahman-magdii.github.io/Special_Design/",
      video: "https://www.linkedin.com/posts/abdelrahman-magdii_i-am-happy-to-share-my-design-when-designing-activity-7210532459296313344-Rp9A",
      techUsed: [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },

    {
      src: "assets/projects-images/3.png",
      name: "Template 4 Dashboard",
      codeUrl: "https://github.com/Abdelrahman-Magdii/HTML-And-CSS-Temp4.git",
      demoUrl: "https://abdelrahman-magdii.github.io/HTML-And-CSS-Temp4/",
      video: "https://www.linkedin.com/posts/abdelrahman-magdii_i-am-happy-to-share-my-design-when-designing-activity-7108107357229887488-jf9A",
      techUsed: [
        "HTML",
        "CSS"
      ]
    },

    {
      src: "assets/projects-images/4.png",
      name: "Fast Food Website",
      codeUrl: "https://github.com/Abdelrahman-Magdii/Fast-Food.git",
      demoUrl: "https://abdelrahman-magdii.github.io/Fast-Food/",
      video: "",
      techUsed: [
        "HTML",
        "CSS"
      ]
    },

    {
      src: "assets/projects-images/5.png",
      name: "Template 1",
      codeUrl: "https://github.com/Abdelrahman-Magdii/HTML_and_CSS_temp_1.git",
      demoUrl: "https://abdelrahman-magdii.github.io/HTML_and_CSS_temp_1/",
      video: "",
      techUsed: [
        "HTML",
        "CSS"
      ]
    },

    {
      src: "assets/projects-images/7.png",
      name: "Template 2",
      codeUrl: "https://github.com/Abdelrahman-Magdii/HTML_and_CSS_Temp_2.git",
      demoUrl: "https://abdelrahman-magdii.github.io/HTML_and_CSS_Temp_2/",
      video: "",
      techUsed: [
        "HTML",
        "CSS"
      ]
    },

    {
      src: "assets/projects-images/6.png",
      name: "Template 3",
      codeUrl: "https://github.com/Abdelrahman-Magdii/HTML_and_CSS_temp_3.git",
      demoUrl: "https://abdelrahman-magdii.github.io/HTML_and_CSS_temp_3/",
      video: "",
      techUsed: [
        "HTML",
        "CSS"
      ]
    },

    {
      src: "assets/projects-images/10.png",
      name: "Bootstrap Design Template",
      codeUrl: "https://github.com/Abdelrahman-Magdii/Bootstrap_5_Design_01_Bondi-main.git",
      demoUrl: "https://abdelrahman-magdii.github.io/Bootstrap_5_Design_01_Bondi-main/",
      video: "https://www.linkedin.com/posts/abdelrahman-magdii_i-am-happy-to-share-my-design-when-activity-7097632824849002496-6cx6",
      techUsed: [
        "HTML",
        "CSS",
        "Bootstrap"
      ]
    },

    {
      src: "assets/projects-images/9.png",
      name: "Profile Website",
      codeUrl: "https://github.com/Abdelrahman-Magdii/Webside_Profile_Using_JS.git",
      demoUrl: "https://abdelrahman-magdii.github.io/Webside_Profile_Using_JS/",
      video: "https://www.linkedin.com/posts/abdelrahman-magdii_first-design-when-designing-the-project-activity-7092774724300156928-Op3Z",
      techUsed: [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },

    {
      src: "assets/projects-images/11.png",
      name: "To Do List Application",
      codeUrl: "https://github.com/Abdelrahman-Magdii/ToDo.git",
      demoUrl: "",
      video: "https://www.linkedin.com/posts/abdelrahman-magdii_angular17-jsonserver-bootstrap5-activity-7193267805658505217-cVbm",
      techUsed: [
        "Angular",
        "Bootstrap",
        "JSON Server",
        "HTML",
        "CSS"
      ]
    },

    {
      src: "assets/projects-images/12.png",
      name: "Login & Registration System",
      codeUrl: "https://github.com/Abdelrahman-Magdii/javaEE_registration_page.git",
      demoUrl: "",
      video: "https://www.linkedin.com/posts/abdelrahman-magdii_javadeveloper-javabackend-activity-7184468786576539649-8j1v",
      techUsed: [
        "Java",
        "JSP",
        "Servlet",
        "JDBC",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },

    {
      src: "assets/projects-images/8.png",
      name: "Hangman Game",
      codeUrl: "https://github.com/Abdelrahman-Magdii/Hangman_Game.git",
      demoUrl: "https://abdelrahman-magdii.github.io/Hangman_Game/",
      video: "https://www.linkedin.com/posts/abdelrahman-magdii_todays-project-is-a-guessing-game-hangman-activity-7105159755278540800-54J-",
      techUsed: [
        "JavaScript",
        "HTML",
        "CSS"
      ]
    }

  ];

}


