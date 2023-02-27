import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthletesComponent } from './components/athletes/athletes.component';
import { HomeComponent } from './components/home/home.component';
import { StakingComponent } from './components/staking/staking.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'athletes', component: AthletesComponent },
  { path: 'staking', component: StakingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
