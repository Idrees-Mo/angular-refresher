import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordHomeComponent } from './password-home/password-home.component';

const routes: Routes = [{ path: '', component: PasswordHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordRoutingModule {}
