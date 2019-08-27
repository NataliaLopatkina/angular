import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SignIn } from '../components/sign-in/sign-in.component';
import { SignUp } from '../components/sign-up/sign-up.component';
import { HomeComponent } from '../components/home/home.component';
import { MyPostsComponent } from '../components/my-posts/my-posts.component';
import { FriendsPostsComponent } from '../components/friends-posts/friends-posts.component';
import { AddPostComponent } from '../components/add-post/add-post.component';

const routes: Routes = [
    {
        path: '', component: SignIn
    },
    {
        path: 'sign-up', component: SignUp
    },

    {
        path: 'home', component: HomeComponent
    },

    {
        path: 'my-posts', component: MyPostsComponent
    },

    {
        path: 'friends-posts', component: FriendsPostsComponent
    },

    {
        path: 'add-post', component: AddPostComponent,
    }
]
    
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule{}
