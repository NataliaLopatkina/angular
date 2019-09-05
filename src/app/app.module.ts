import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { HomeComponent } from '../components/home/home.component';
import { MyPostsComponent } from '../components/my-posts/my-posts.component';
import { FriendsPostsComponent } from '../components/friends-posts/friends-posts.component';
import { AddPostComponent } from '../components/add-post/add-post.component';
import { HeaderComponent } from '../components/header/header.component';
import { NavComponent } from '../components/nav/nav.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    MyPostsComponent,
    FriendsPostsComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
