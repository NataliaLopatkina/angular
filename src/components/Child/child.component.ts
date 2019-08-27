import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { User } from '../../interface/user';
 
@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  // title = 'my-project';
  // users: User[] = [
  //   {
  //     name: 'Sara',
  //     lastName: 'Sarasara',
  //     age: 25,
  //   },

  //   {
  //     name: 'John',
  //     age: 30,
  //   },

  //   {
  //     name: 'Mike',
  //     age: 35,
  //   }
  // ]

  @Input() userName: string;
  @Input() userAge: number;
}
