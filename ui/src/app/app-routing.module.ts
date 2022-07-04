import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { HomePageComponent } from './core/components/home-page/home-page.component';
import { MainComponent } from './core/components/main/main.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"home", component: HomePageComponent},

  { path:"main", component:MainComponent, children:[
    {path:"contact", component: ContactUsComponent},


  ] ,
},
{ path: '',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
{ path: '',loadChildren: () => import('./Pages/pages.module').then(m => m.PagesModule)},

{path:"**",component:PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
