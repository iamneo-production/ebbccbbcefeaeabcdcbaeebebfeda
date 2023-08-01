import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  
  bool: boolean=true;
  num:number=1;
  bool1: boolean=true;
  num1:number=1;
  cal:number=0;

  outbox:boolean = false;
  inbox:boolean = true;
  in:boolean = true;

  showform(){
    if (this.num==1){
    this.bool=false;
    this.num=0;
    }
    else {
      this.bool=true;
      this.num=1;
    }
  }
  
  showtotal(){
    if (this.num1==1){
    this.bool1=false;
    this.num1=0;
    }
    else {
      this.bool1=true;
      this.num1=1;
    }
  }

  food:any[][] = [];
  // ["Apple","100","https://t3.ftcdn.net/jpg/01/76/97/96/360_F_176979696_hqfioFYq7pX13dmiu9ENrpsHZy1yM3Dt.jpg","1"]
  searchfood:any[][]=[]

  addCal(a:string,b:string,c:string,){
    this.food.push([a,b,c,"1"])
  }

  incItm(a:string,b:string)
  {
    for(var i=0;i<this.food.length;i++)
    {
        if(this.food[i][0]==a)
        {
          this.food[i][3] = Number(this.food[i][3]) + Number(b);
          break
        }
    }
  }
  getTotal()
  {
    var tot=0
    for(var i=0;i<this.food.length;i++)
    {
      tot = Number(tot) +(Number(this.food[i][1])*Number(this.food[i][3]));
    }
    this.cal=tot
  }

  search(a:string)
  {
    this.outbox=true
    this.inbox=false
    this.in=false
   
    var t = 0;
    var tt=-1;

    this.searchfood=[]
    
      for(var i=0;i<this.food.length;i++)
    {
      if(this.food[i][0]==a)
      {
        this.searchfood.push(this.food[i])
      }
    }
    
    
    
    if(this.searchfood.length==0)
    {
      this.in=true
    }
    console.log(this.searchfood.length)
  }
  searchof()
  {
    this.outbox=false
    this.inbox=true
    this.in=true
  }
}
