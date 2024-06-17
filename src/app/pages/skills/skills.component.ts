import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skills = [
    {
      src: "assets/skills-logos/angular.webp",
      name: "angular",
      bgColor: "#dd1b16",
      textColor: "#FFF"
    },
    {
      src: "assets/skills-logos/ts.webp",
      name: "typescript",
      bgColor: "#3178c6",
      textColor: "#FFF"
    },
    {
      src: "assets/skills-logos/js.webp",
      name: "javascript",
      bgColor: "#f0db4f",
      textColor: "#323330"
    },
    {
      src: "assets/skills-logos/html.webp",
      name: "HTML",
      bgColor: "#e34c26",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/css.webp",
      name: "CSS",
      bgColor: "#0074d9",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/bootstrap.webp",
      name: "Bootstrap",
      bgColor: "#563d7c",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/git.webp",
      name: "Git",
      bgColor: "#f34f29",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/github.webp",
      name: "Github",
      bgColor: "#7f7f7f",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/vscode.webp",
      name: "VsCode",
      bgColor: "#227EE5",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/cplusplus.webp",
      name: "C++",
      bgColor: "#007FCC",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/web.png",
      name: "Java",
      bgColor: "orange",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/python.png",
      name: "python",
      bgColor:"yellow",
      textColor: "#fff"
    },
    // {
    //   src: "assets/skills-logos/firebase.webp",
    //   name: "Firebase",
    //   bgColor: "#FFCA28",
    //   textColor: "#fff"
    // },
    {
      src: "assets/skills-logos/sql.webp",
      name: "SQL",
      bgColor: "#2687CF",
      textColor: "#fff"
    }, 
    {
      src: "assets/skills-logos/oracle.png",
      name: "Oracle",
      bgColor: "black",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/spring.svg",
      name: "Spring",
      bgColor: "green",
      textColor: "#fff"
    },
  ]

}
