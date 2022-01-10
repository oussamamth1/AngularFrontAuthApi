import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { catchError, tap, map } from 'rxjs/operators';
import { Post } from './post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})

export class BoardUserComponent implements OnInit {
  content?: string;
  users!: Post[];
  user: Post = new Post();
  
  constructor(private userService: UserService,private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe({
      next: data => {
        this.users =  data['hydra:member'];
     console.log(data);
        
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
    
  }
  userDetails(id: number) {
    this.router.navigate(['hydra:member']);
    console.log(id);

  }
}
