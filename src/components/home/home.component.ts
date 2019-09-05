import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service'; 
import { User } from '../../classes/user/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HttpService]
})
export class HomeComponent implements OnInit {

  users: User[] = [];
  active: boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getUsers().subscribe(data => this.users = data["userList"]);
  }

  toggleButton() {
    this.active = this.active = !this.active;
  }
}
