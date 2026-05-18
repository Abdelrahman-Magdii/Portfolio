import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  timeline: {
    time: string,
    name: string,
    title: string,
    details: {
      itm: string,
      div: string,
      div1: string,
      div2: string,
      div3: string,
      div4: string,
      div5: string,
    }
  }[] = [

    {
      time: "Jul 2024 - Nov 2024",
      name: "Biobusiness",
      title: "Frontend Developer Intern",
      details: {
        itm: "Responsibilities & Achievements:",
        div: "Developed responsive web applications using Angular.",
        div1: "Worked with TypeScript, JavaScript, HTML, CSS, and Bootstrap.",
        div2: "Collaborated with backend developers for API integration.",
        div3: "Improved UI responsiveness and user experience.",
        div4: "Worked with Git and GitHub for version control.",
        div5: "Built reusable and maintainable frontend components."
      }
    },

    {
      time: "Jul 2023 - Sep 2023",
      name: "Information Technology Institute (ITI)",
      title: "Frontend Developer Trainee",
      details: {
        itm: "During this training, I learned:",
        div: "HTML & CSS fundamentals for building responsive web pages.",
        div1: "JavaScript (ES6) programming concepts and modern syntax.",
        div2: "Bootstrap framework for responsive UI development.",
        div3: "Angular framework for building dynamic web applications.",
        div4: "Git & GitHub for version control and collaboration.",
        div5: "Frontend problem-solving and debugging skills."
      }
    },

    {
      time: "2021 - 2025",
      name: "Faculty of Computer Science & Artificial Intelligence - Benha University",
      title: "Bachelor's Degree in Computer Science & Artificial Intelligence",
      details: {
        itm: "Education Details:",
        div: "Studied software engineering and computer science fundamentals.",
        div1: "Focused on backend development and software architecture.",
        div2: "Learned Data Structures & Algorithms and OOP concepts.",
        div3: "Studied database systems and networking basics.",
        div4: "Participated in software engineering and AI-related projects.",
        div5: "Graduation Project: Online Blood Donation Platform."
      }
    },

    {
      time: "2023 - 2024",
      name: "ICPC & Competitive Programming",
      title: "Competitive Programmer",
      details: {
        itm: "Achievements & Activities:",
        div: "Participated in ICPC ECPC Qualifications (2023, 2024).",
        div1: "Solved algorithmic and problem-solving challenges.",
        div2: "Strengthened knowledge in data structures and algorithms.",
        div3: "Practiced optimization and analytical thinking.",
        div4: "Created programming tutorials and coding content on YouTube.",
        div5: "Improved coding speed and logical problem-solving skills."
      }
    },

    {
      time: "2024 - Present",
      name: "Backend & Microservices Projects",
      title: "Software Engineer",
      details: {
        itm: "Projects & Technologies:",
        div: "Developed RESTful & GraphQL APIs using Spring Boot.",
        div1: "Built scalable microservices using Kafka and RabbitMQ.",
        div2: "Implemented JWT Authentication & Spring Security.",
        div3: "Worked with PostgreSQL, MySQL, MongoDB, and Redis.",
        div4: "Used Docker, Docker Compose, and GitHub Actions for CI/CD.",
        div5: "Documented APIs using Swagger and Postman."
      }
    }

  ];

}
