import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PasswordHomeComponent } from './passwordapp/password-home/password-home.component';
import { PostsHomeComponent } from './postsapp/posts-home/posts-home.component';
import { TypingHomeComponent } from './typingapp/typing-home/typing-home.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'password', component: PasswordHomeComponent },
  { path: 'typing', component: TypingHomeComponent },
  { path: 'posts', component: PostsHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
