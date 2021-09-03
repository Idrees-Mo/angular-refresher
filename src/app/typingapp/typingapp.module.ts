import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypingHomeComponent } from './typing-home/typing-home.component';
import { TypingAppRoutingModule } from './typingapp-routing.module';

@NgModule({
  declarations: [TypingHomeComponent],
  imports: [CommonModule, TypingAppRoutingModule],
})
export class TypingappModule {}
