import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { OsrsSkillComponent } from './osrs-skill/osrs-skill.component';

const routes: Routes = [
  { path: '', component: OsrsSkillComponent },
  { path: 'skills', component: OsrsSkillComponent },
  { path: 'groceries', component: GroceryListComponent },
  { path: 'chat', component: ChatComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
