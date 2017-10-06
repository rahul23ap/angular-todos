import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId:module.id,
  selector: 'User',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent {
  title: string;
  email:string;
  address:address;
  hobbies:string[];
  showHobbies : boolean;
  posts:Post[];

  constructor(private postsService: PostsService){
    this.title = 'My First App';
    this.email = 'rahul23ap@gmail.com';
    this.address = {
    Street : 'Magarpattaaaa',
    Area : 'Hadapsar',
    Zip: '411028',
    City : 'Pune',
    Country : 'India'

    }
    this.hobbies=['Movies','Sports','Music'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;

    });
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
  }
  toggleHobbies(){
      //console.log("Click to Show Hobbies");
      if(this.showHobbies==true){

        this.showHobbies=false;
      }else{
        this.showHobbies=true;
      }
  }
  deleteHobby(i){
    this.hobbies.splice(i,1);
  }

}

interface address{

  Street: string;
  Area  : string;
  Zip   : string;
  City  :string;
  Country:string;
  
}

interface Post{
  id: number;
  title: string;
  body: string;
}