import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AegisShieldComponent } from './aegis-shield/aegis-shield.component';
import { ButtonModalCustom } from './modal-custom/button/button-modal-custom';
import { GetOutComponent } from './get-out/get-out.component';
import { guardianOfAegisGuard } from './security/guardian-of-aegis.guard';

const routes: Routes = [
  {path: ``, component: AppComponent},
  {path: `home`, component: HomeComponent},
  {path: `modal`, component: ButtonModalCustom},
  {path: `aegis-shield`, component: AegisShieldComponent, canActivate: [guardianOfAegisGuard]},
  {path: `get-out`, component: GetOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
