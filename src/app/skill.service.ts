import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Highscores } from './osrs-skill/highscores';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseURL = "https://localhost:44353/skill/"

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient){ }
  
  getSkills(player: string): Observable<Highscores> {
    return this.http.get<Highscores>(this.baseURL + player);
  }
}
