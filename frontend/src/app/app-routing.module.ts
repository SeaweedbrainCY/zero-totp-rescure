import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {VaultComponent} from './vault/vault.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ChangelogComponent } from './changelog/changelog.component';
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'openVault', component: LoginComponent},
  {path: 'openVault/:error_param', component: LoginComponent},
  {path:'vault', component: VaultComponent},
  {path:"logout", component: LogoutComponent},
  {path:"privacy", component: PrivacyPolicyComponent},
  {path:"changelog", component: ChangelogComponent},
  {path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
