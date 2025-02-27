import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "src/app/views/main/main.component";
import { ConversationsComponent } from "./views/conversations/conversations.component";
/**
 * Contains a list of routes to enable navigation from one view to the next
 * as users perform application tasks
 * @property {array} routes
 */
export const routes: Routes = [

  {
    path: "",
    component: MainComponent,
  },
  { 
    path: 'callback', 
    component: MainComponent 
  },
  {
    path: 'conversation/:id',
    component: ConversationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
