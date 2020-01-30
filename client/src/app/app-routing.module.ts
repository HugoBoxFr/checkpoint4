import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CvComponent } from './pages/cv/cv.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'accueil',
    component: HomeComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'cv',
    component: CvComponent
  },
  {
    path:'portfolio',
    component: PortfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
