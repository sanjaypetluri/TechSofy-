import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }
  milkCount:any={};
  breadCount:any;
  jamCount:any;
  postMilk(milkCount)
  {
    
    this.milkCount=milkCount;

    console.log(this.milkCount);
  }
  postBread(breadCount)
  {
    this.breadCount=breadCount;
    console.log(this.breadCount);

  }
  postJam(jamCount)
  {
  this.jamCount=jamCount;
  console.log(this.jamCount);
  }
  getItems()
  {
    return this.milkCount;
  }
  getBread()
  {
     return this.breadCount;
  }
  getJam()
  {
    return this.jamCount;
  }
}
