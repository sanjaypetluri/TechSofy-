import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  number:number;
receive:any={};
receiveBread:any={};
receiveJam:any={};
name:string;
cost:any;
count:any;
totalData:any[]=[];
totalBreadCost:number=0;
totalMilkCost:number=0;
totalJamCost:number=0
totalBill:any[]=[];
newcount:number;
milkcost:number=0;
milkamount:any={};
jamamount:any={};
breadamount:any={};

  constructor(private ds:InfoService, private router:Router) 
  { }
  
  ngOnInit() {
    this.receive=this.ds.getItems();
     this.receiveBread=this.ds.getBread();
     this.receiveJam=this.ds.getJam();
    
     if(this.receive.name!=undefined)
     {
      this.totalData.push(this.receive);
     }

     if(this.receiveBread.name!=undefined)
     {
      this.totalData.push(this.receiveBread);
     }

     if(this.receiveJam.name!=undefined)
     {
      this.totalData.push(this.receiveJam);
     }
 
     console.log(this.totalData); 
    } 
    home()
    {
      this.router.navigate(['/products']);
    }
    genrateBill()
    {
      this.milkBill();
      this.jamBill();
      this.breadBill();

      this.milkamount.name="milk";
      
     this.milkamount.amount=this.totalMilkCost;

     this.jamamount.name="jam";
     this.jamamount.amount=this.totalJamCost;

     this.breadamount.name="bread"
     this.breadamount.amount=this.totalBreadCost;

     this.totalBill.push(this.milkamount);
     this.totalBill.push(this.breadamount);
     this.totalBill.push(this.jamamount);

      // this.totalBill.push(this.totalJamCost);
      console.log(this.totalBill);
    }
    milkBill() 
    {
      this.newcount=this.receive.count-1;
      this.milkcost=this.receive.cost;
      
      if((this.newcount)%2==0)
      {
         this.totalMilkCost= this.newcount*(this.milkcost*0.62)+20;
        console.log(this.totalMilkCost);
      }
      else{
        if(this.receive.count==undefined)
        {
          this.receive.count=0;
          console.log(this.receive.count)
        }

        if(this.milkcost==undefined)
        {
          this.milkcost=0;
          console.log(this.milkcost)
        }
     
        console.log(this.milkcost)

         this.totalMilkCost= this.receive.count*this.milkcost*0.62;
         console.log(this.totalMilkCost);

      }
    }
    jamBill()
    {
        this.totalJamCost=this.receiveJam.cost*this.receiveJam.count;
      console.log(this.totalJamCost);
    }
    breadBill()
    {
        this.totalBreadCost= (this.receiveBread.count*this.receiveBread.cost);
        console.log(this.totalBreadCost);
      
    }

}
