import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Produit } from './produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  content?: string;
  produits!: Produit[];
  produitpuplishers!: Produit[];
  produit: Produit = new Produit();
  produitpuplisher: Produit = new Produit();
  T:string[]=[];
  // publish!:string[];
  constructor(private userService: UserService,private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.userService.getProduits().subscribe({
      next: data => {
        this.produits =  data['hydra:member'];
      this.produitpuplishers=this.produits;
        // console.log(data['hydra:member'][0]['@id'])
        
        console.log(this.produitpuplishers)
        console.log(data);
        var arr:any = [0];
        for (var b=0; b<data["hydra:totalItems"];b++) {
      var t=data['hydra:member'][b].publish.email;
      console.log(arr[b]);
       
         
        
        }
        this.T=t;
        

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
  this.produits.find((h: any) => h.id === id);
  // this.produits.find(EmailValidator);
  // this.router.navigate(['mod']);
  // console.log(this.produits.id);

}

}
