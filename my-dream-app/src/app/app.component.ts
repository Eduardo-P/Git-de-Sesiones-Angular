import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['ryan','joe','cameron','john'];
  activated = false;
  title = 'my-dream-app';
  name : string;
  email; // : string;
  webpage : string;
  hobbies : string[];
  showHobbies : boolean;

  constructor() {
    console.log("Constructor working...");
    this.title = 'my-dream-app';
    this.name = "Eduardo Portugal";
    this.email = "eportugalpor@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Furbol","Programación","Netflix"];
    this.showHobbies = false;
  }

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
}
