import { Skill } from "./skill";
import { Activity } from "./activity";

export interface Highscores
{
    skills: Skill[];
    activities: Activity[];
}