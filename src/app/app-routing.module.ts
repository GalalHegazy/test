import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"",component:HomeComponent, title:"Home"},
  {path:"about" ,component:AboutComponent ,title:"About"},
  {path:"contact" ,component:ContactComponent ,title:"Contact"},
  {path:"protfolio" ,component:ProtfolioComponent ,title:"Protfolio"},
  {path:"**",component:NotFoundComponent ,title:"NOT FOUND"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
