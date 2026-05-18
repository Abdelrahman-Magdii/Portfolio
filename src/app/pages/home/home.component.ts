import { Component } from '@angular/core';
import { headerTabs } from '../../../models/header-tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  activeTab: string = headerTabs.home;

  services: {
    name: string,
    caption: string,
    description: string,
    icon: string,
    hovered: boolean
  }[] = [

    {
      name: "Backend Development",
      caption: "Scalable & Secure Server-Side Applications",
      description: "I develop robust backend systems using Spring Boot, building secure RESTful and GraphQL APIs with authentication, database integration, and scalable architecture.",
      icon: "assets/services-icons/backend.png",
      hovered: false
    },

    {
      name: "Microservices Architecture",
      caption: "Modern Distributed Systems",
      description: "I build scalable microservices using Spring Cloud, Kafka, RabbitMQ, Eureka, API Gateway, and Docker to create maintainable and high-performance systems.",
      icon: "assets/services-icons/microservices.png",
      hovered: false
    },

    {
      name: "Frontend Development",
      caption: "Interactive & Responsive User Interfaces",
      description: "I create responsive and dynamic frontend applications using Angular, React, TypeScript, Bootstrap, Tailwind CSS, HTML, and CSS.",
      icon: "assets/services-icons/app-development.webp",
      hovered: false
    },

    {
      name: "API Development & Integration",
      caption: "Efficient Communication Between Systems",
      description: "I design and integrate RESTful APIs and GraphQL services, ensuring secure communication between frontend and backend systems.",
      icon: "assets/services-icons/api.png",
      hovered: false
    },

    {
      name: "Database Design & Management",
      caption: "Reliable Data Storage Solutions",
      description: "I work with relational and NoSQL databases including PostgreSQL, MySQL, Oracle, MongoDB, and Redis for efficient and optimized data management.",
      icon: "assets/services-icons/database.png",
      hovered: false
    },

    {
      name: "DevOps & Deployment",
      caption: "Automation & Continuous Delivery",
      description: "I use Docker, Docker Compose, GitHub Actions, and CI/CD pipelines to automate builds, testing, and deployment workflows.",
      icon: "assets/services-icons/devops.png",
      hovered: false
    },

    {
      name: "Authentication & Security",
      caption: "Secure User Access & Protection",
      description: "I implement secure authentication and authorization systems using Spring Security, JWT authentication, and role-based access control.",
      icon: "assets/services-icons/security.png",
      hovered: false
    },

    {
      name: "Performance Optimization",
      caption: "Fast & Optimized Applications",
      description: "I optimize application performance using caching, efficient database queries, clean architecture, and frontend optimization techniques.",
      icon: "assets/services-icons/performance.webp",
      hovered: false
    },

    {
      name: "Testing & Debugging",
      caption: "Reliable and Maintainable Software",
      description: "I write clean and testable code using JUnit and debugging tools to ensure application stability, maintainability, and high-quality software delivery.",
      icon: "assets/services-icons/testing.png",
      hovered: false
    }

  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
