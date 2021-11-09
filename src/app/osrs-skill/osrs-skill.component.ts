import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillService } from '../skill.service';
import { Highscores } from './highscores';
import { Skill } from './skill';
import { Activity } from './activity';

@Component({
  selector: 'app-osrs-skill',
  templateUrl: './osrs-skill.component.html',
  styleUrls: ['./osrs-skill.component.css']
})
export class OsrsSkillComponent implements OnInit {

  player: string = "";

  highscores!: Highscores;

  data: any;

  constructor(private http: HttpClient, private skillService: SkillService) { }

  ngOnInit(): void {
    this.getSkills(this.player);
  }

  getSkills(player: string): void {

    this.skillService.getSkills(player)
      .subscribe(highscore => this.highscores = highscore);
  }

}
