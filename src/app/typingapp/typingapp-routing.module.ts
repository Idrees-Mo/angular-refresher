import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypingHomeComponent } from './typing-home/typing-home.component';

const routes: Routes = [{ path: '', component: TypingHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypingAppRoutingModule {}
