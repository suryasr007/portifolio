import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from "../models/project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  /*
  user:string= 'suryasr007';
  github calling function
  Filter the projects
  List all valid projects
  */

  projects_to_be_fetched: string[] = ['suryasr007/random-password-generator', 'rapidstack/WAR', 'suryasr007/clip', 
  'suryasr007/portifolio', 'suryasr007/languagepoll', 'suryasr007/dev-logger', 'suryasr007/war-loopback', 'suryasr007/blog-django-RESTapi'];

  projects: Project[] = [];
  
  constructor(private httpClient: HttpClient) {}

  getProjects() {
    this.projects_to_be_fetched.forEach(project => {
      this.httpClient.get<Project>(`https://api.github.com/repos/${project}`)
      .subscribe(
        (data: Project) =>  {
          this.projects.push(data);
        });
    });
  }

  ngOnInit() {
    this.getProjects();
  }
}
