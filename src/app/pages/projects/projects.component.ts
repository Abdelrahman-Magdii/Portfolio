import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      src: "assets/projects-images/1.png",
      name: "E-commerce",
      codeUrl: "https://github.com/Abdelrahman-Magdii/E-commerce-Angular.git",
      demoUrl: "https://abdelrahman-magdii.github.io/E-commerce-Angular/products",
      video: "https://www.linkedin.com/posts/abdelrahman-magdii_i-am-happy-to-share-with-you-final-project-activity-7094843648411897856-rqLY?utm_source=share&utm_medium=member_desktop",
      techUsed: ["Html", "Css","Angular", "Bootstrap", "TypeScript"]
    },
    {
      src: "assets/projects-images/2.png",
      name: "My Portfolio",
      codeUrl: "https://github.com/Abdelrahman-Magdii/Portfolio.git",
      demoUrl: "https://abdelrahman-magdii.github.io/Portfolio.live/home",
      video:"https://www.linkedin.com/posts/abdelrahman-magdii_activity-7208423002206568448-ilM4?utm_source=share&utm_medium=member_desktop",
      techUsed: ["Html","Css","Angular","Bootstrap"]
    },
    {
      src: "assets/projects-images/3.png",
      name: " Template 4 Dashboard",
      codeUrl: "https://github.com/Abdelrahman-Magdii/HTML-And-CSS-Temp4.git",
      demoUrl: "https://abdelrahman-magdii.github.io/HTML-And-CSS-Temp4/",
      video:"https://www.linkedin.com/posts/abdelrahman-magdii_i-am-happy-to-share-my-design-when-designing-activity-7108107357229887488-jf9A?utm_source=share&utm_medium=member_desktop",
      techUsed: ["Html", "Css"]
    },
    {
      src: "assets/projects-images/8.png",
      name: "Hangman Game",
      codeUrl: "https://github.com/Abdelrahman-Magdii/Hangman_Game.git",
      demoUrl: "https://abdelrahman-magdii.github.io/Hangman_Game/",
      video:"https://www.linkedin.com/posts/abdelrahman-magdii_todays-project-is-a-guessing-game-hangman-activity-7105159755278540800-54J-?utm_source=share&utm_medium=member_desktop",
      techUsed: ["Html", "Css", "JavaScript"]
    },
    {
      src: "assets/projects-images/4.png",
      name: "Fast Food",
      codeUrl: "https://github.com/Abdelrahman-Magdii/Fast-Food.git",
      demoUrl: "https://abdelrahman-magdii.github.io/Fast-Food/",
      video:"",
      techUsed: ["Html", "Css"]
    },
    {
      src: "assets/projects-images/5.png",
      name: "Template 1",
      codeUrl: "https://github.com/Abdelrahman-Magdii/HTML_and_CSS_temp_1.git",
      demoUrl: "https://abdelrahman-magdii.github.io/HTML_and_CSS_temp_1/",
      video:"",
      techUsed: ["Html","Css"]
    },
    {
      src: "assets/projects-images/7.png",
      name: "Template 2",
      codeUrl: "https://github.com/Abdelrahman-Magdii/HTML_and_CSS_Temp_2.git",
      demoUrl: "https://abdelrahman-magdii.github.io/HTML_and_CSS_Temp_2/",
      video:"",
      techUsed: ["Html", "Css"]
    },
    {
      src: "assets/projects-images/6.png",
      name: "Template 3",
      codeUrl: "https://github.com/Abdelrahman-Magdii/HTML_and_CSS_temp_3.git",
      demoUrl: "https://abdelrahman-magdii.github.io/HTML_and_CSS_temp_3/",
      video:"",
      techUsed: ["Html", "Css"]
    },
    {
      src: "assets/projects-images/9.png",
      name: "profile website",
      codeUrl: "https://github.com/Abdelrahman-Magdii/Webside_Profile_Using_JS.git",
      demoUrl: "https://abdelrahman-magdii.github.io/Webside_Profile_Using_JS/",
      video:"https://www.linkedin.com/posts/abdelrahman-magdii_first-design-when-designing-the-project-activity-7092774724300156928-Op3Z?utm_source=share&utm_medium=member_desktop",
      techUsed: ["Html", "Css","JavaScript"]
    },
    {
      src: "assets/projects-images/10.png",
      name: "Bootstrap Design Template 5",
      codeUrl: "https://github.com/Abdelrahman-Magdii/Bootstrap_5_Design_01_Bondi-main.git",
      demoUrl: "https://abdelrahman-magdii.github.io/Bootstrap_5_Design_01_Bondi-main/",
      video:"https://www.linkedin.com/posts/abdelrahman-magdii_i-am-happy-to-share-my-design-when-activity-7097632824849002496-6cx6?utm_source=share&utm_medium=member_desktop",
      techUsed: ["Html", "Css","Bootstrap"]
    },
    {
      src: "assets/projects-images/11.png",
      name: "To Do List",
      codeUrl: "https://github.com/Abdelrahman-Magdii/ToDo.git",
      demoUrl: "",
      video:"https://www.linkedin.com/posts/abdelrahman-magdii_angular17-jsonserver-bootstrap5-activity-7193267805658505217-cVbm?utm_source=share&utm_medium=member_desktop",
      techUsed: ["Html", "Css","Angular","Bootstrap","JSON-Server"]
    },
    {
      src: "assets/projects-images/12.png",
      name: "Login and Register page",
      codeUrl: "https://github.com/Abdelrahman-Magdii/javaEE_registration_page.git",
      demoUrl: "",
      video:"https://www.linkedin.com/posts/abdelrahman-magdii_javadeveloper-javabackend-activity-7184468786576539649-8j1v?utm_source=share&utm_medium=member_desktop",
      techUsed: ["HTML","CSS","JS","Java","JSP","Servlet","JDBC","MySQL"]
    },
  ]

}
