import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { ChildComponent } from '../components/Child/child.component';
import { SignIn } from '../components/sign-in/sign-in.component';
import { SignUp } from '../components/sign-up/sign-up.component';
import { HomeComponent } from '../components/home/home.component';
import { MyPostsComponent } from '../components/my-posts/my-posts.component';
import { FriendsPostsComponent } from '../components/friends-posts/friends-posts.component';
import { AddPostComponent } from '../components/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SignIn,
    SignUp,
    HomeComponent,
    MyPostsComponent,
    FriendsPostsComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
