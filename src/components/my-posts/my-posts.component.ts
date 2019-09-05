import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Post } from '../../classes/post/post';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss'],
  providers: [HttpService]
})
export class MyPostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getPosts().subscribe(data => this.posts = data["postList"]);
  }

}
