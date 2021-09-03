import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsHomeComponent } from './posts-home/posts-home.component';
import { PostsappRoutingModule } from './postsapp-routing.module';

@NgModule({
  declarations: [PostsHomeComponent],
  imports: [CommonModule, PostsappRoutingModule],
})
export class PostsappModule {}
