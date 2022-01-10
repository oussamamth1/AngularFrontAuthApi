import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Users } from './users';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  users!: Users[];
  user: Users = new Users();
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
        this.users =  data['hydra:member'];
        console.log( this.users);
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }
  userDetails(id: number) {
  
    this.router.navigate(['postCat']);
    console.log(id);
  
  }
}
