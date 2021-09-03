import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PasswordHomeComponent } from './passwordapp/password-home/password-home.component';
import { PostsHomeComponent } from './postsapp/posts-home/posts-home.component';
import { TypingHomeComponent } from './typingapp/typing-home/typing-home.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'password',
    loadChildren: () =>
      import('./passwordapp/passwordapp.module').then(
        (m) => m.PasswordappModule
      ),
  },
  {
    path: 'typing',
    loadChildren: () =>
      import('./typingapp/typingapp.module').then((m) => m.TypingappModule),
  },

  {
    path: 'posts',
    loadChildren: () =>
      import('./postsapp/postsapp.module').then((m) => m.PostsappModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
