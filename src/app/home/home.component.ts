import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { Ouvier } from './ouvier';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  users!: Ouvier[];
  user: Ouvier = new Ouvier();
  constructor(private userService: UserService,private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.users =  data['hydra:member'];
      
        console.log(data['hydra:member'])
        
        // const jsonObj2 = JSON.parse(data);
        // console.log(JSON.stringify(jsonObj2))
        // const quadsArray2 = await this.jsonLd.toRDF(jsonObj2, {});
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
