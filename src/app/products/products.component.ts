import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private ds:InfoService, private route:Router) { }
    count:any=0;
    breadCount:any=0;
    jamCount:number=0;
    milkObj:any={};
    breadObj:any={};
    jamObj:any={};
    
  ngOnInit() {
  }

  milk()
  {
    this.count=this.count+1;
    // console.log(this.count);
    this.milkObj.name="Milk Packet";
    this.milkObj.cost=20;
    this.milkObj.count=this.count;
    this.ds.postMilk(this.milkObj);
    // console.log(this.milkObj);
  }

  bread()
  {
    this.breadCount=this.breadCount+1;
    // console.log(this.breadCount);
    this.breadObj.name="Bread Pack";
    this.breadObj.cost=20;
    this.breadObj.count=this.breadCount;
    this.ds.postBread(this.breadObj);

  }
  jam()
  {
    this.jamCount=this.jamCount+1;
    // console.log(this.jamCount);
    this.jamObj.name="Kissan jam";
    this.jamObj.cost=30;
    this.jamObj.count=this.jamCount;
    this.ds.postJam(this.jamObj);
  }

  preview()
  {
    this.route.navigate(['/preview']);
  }
}
