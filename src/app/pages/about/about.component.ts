import { Component, NgModule } from '@angular/core';

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
    details: { [key: string]: string 
      itm: string,
      div: string,
      div1: string,
      div2: string,
      div3: string,
      div4: string,
      div5: string,
    }
  }[] = [
      // {
      //   time: "Jul 2023 - Current",
      //   name: "",
      //   title: "Frontend Angular Developer",
      //   details: {
      //     itm: "Responsible for:",
      //     div: "Building and maintaining user interfaces.",
      //     div1: "Developing and integrating APIs and web services.",
      //     div2: "Collaborating closely with back-end developers to ensure a smooth user experience.",
      //     div3: "Identifying and resolving front-end issues through debugging and troubleshooting.",
      //     div4: "Utilizing version control systems like Git/GitHub to manage code efficiently.",
      //     div5: "Writing code to ensure compatibility across various browsers and accessibility standards."
      //   }
      // },
      {
        time: "Mar 2023 - Jun 2023",
        name: "Information Technology Institute (ITI)",
        title: "Frontend Developer",
        details: {
          itm: "During this training, I acquired knowledge and skills in various frontend development technologies, including:",
          div: "HTML & CSS : Learning the fundamentals of web development, structure, and styling.",
          div1: "JavaScript & ES6 : Learning the core concepts of JavaScript programming.",
          div2: "Bootstrap : Mastering the popular CSS framework for responsive.",
          div3: "Angular : Deep diving into the modern front-end framework for building dynamic web applications.",
          div4: "Version Control : Proficiency in using Git for version control, including branching and merging.",
          div5: "Problem Solving : Analytical and problem-solving skills to identify and fix frontend issues efficiently.",

        }
      },
      {
        time: "Sep 2021 - Now",
        name: "Faculty Of Computer Science & Ai, at Benha University",
        title: "Bachelor's degree, Computer Engineering",
        details: {
          itm: "Grade :",
          div: "Very Good",
          div1: "3.0",
          div2: "",
          div3: "",
          div4: "",
          div5: "",
        }
      },      {
        time: "Sep 2022 - sep 2023",
        name: "Competitive Programming",
        title: "problem solving",
        details: {
          itm:"",
          div: "The ICPC Egyptian collegiate programming contest",
          div1: "",
          div2: "",
          div3: "",
          div4: "",
          div5: "",
        }
      },
    ];



}
