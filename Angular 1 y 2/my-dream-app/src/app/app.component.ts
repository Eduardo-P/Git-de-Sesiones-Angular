import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string = "Eduardo Sebastian Stephan";
  age : number = 18;
  users = ['ryan','joe','cameron','john'];
  activated = false;
  title = 'my-dream-app';
  //name : string;
  email : string = "eportugalpor@unsa.edu.pe";
  webpage : string = "http://www.unsa.edu.pe";
  hobbies : string[] = ["Furbol","Programación","Netflix"];
  showHobbies : boolean = false;

  posts:any[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      //console.log(data);
      this.posts = data;
    })
  }

  /*
  constructor() {
    console.log("Constructor working...");
    this.title = 'my-dream-app';
    this.name = "Eduardo Portugal";
    this.email = "eportugalpor@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Furbol","Programación","Netflix"];
    this.showHobbies = false;
  }
  */

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby:any) {
    //console.log(hobby.value);
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }

  sayHello() {
    alert("Hola Desde app.component");
  }

  deleteUser(user:any) {
    for(let i=0; i<this.users.length; i++) {
      if (user==this.users[i]) {
        this.users.splice(i,1);
      }
    }
  }

  addUser(newUser:any) {
    //console.log(newUser.value);
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }
}
