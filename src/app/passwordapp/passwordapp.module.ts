import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordHomeComponent } from './password-home/password-home.component';
import { PasswordRoutingModule } from './password-routing.module';

@NgModule({
  declarations: [PasswordHomeComponent],
  imports: [CommonModule, PasswordRoutingModule],
})
export class PasswordappModule {}
