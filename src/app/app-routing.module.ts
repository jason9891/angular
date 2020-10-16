import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from './notfound/notfound.component'

import {AuthRoutingModule} from './auth/auth.routing';
import {PagesRoutingModule} from './pages/pages.routing';

const routes: Routes= [
   {path:'', redirectTo: '/dashboard',pathMatch:'full'},
   {path:'**', component: NotfoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot (routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
