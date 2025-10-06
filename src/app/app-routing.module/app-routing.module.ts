import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLitsComponent } from '../user-lits.component/user-lits.component';
import { AboutComponent } from '../app.component/app.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserLitsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
