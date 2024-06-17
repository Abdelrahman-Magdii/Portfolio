import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitProjectsService {

  // private readonly GITHUB_API_URL = 'https://github.com/Abdelrahman-Magdii?tab=repositories';
  private readonly GITHUB_API_URL = 'https://api.github.com/users/Abdelrahman-Magdii/repos';


  constructor(private http: HttpClient) { }


  getGitProjects(): Observable<any> {
    return this.http.get(this.GITHUB_API_URL);
  }

}
