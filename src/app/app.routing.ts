import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Component

import { LoginComponent } from './login/login.component';





export const routes: Routes = [
 
 
 
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
