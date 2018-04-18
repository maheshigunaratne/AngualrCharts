import { Component, OnInit ,Input} from "@angular/core";
import { UsersService } from "../../services/users.service"
import {User} from '../../user';
import { id } from "@swimlane/ngx-charts/release/utils";
import { element } from "protractor";
import { Router, RouterModule, RouterLink } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { Ticket } from "../../Ticket";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
@Input() user: User
  userList :  User[]=[];;
  userListItem: any[]=[];
  payamentListItem:any[]=[];
  selectedUser: User;
  done : boolean = false; // flag to say data fetch is done
  clicked:boolean=false;

  view: any[] = [500, 300];
  view1: any[] = [200, 300];
  // options
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  showLegend = true;

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  
  showXAxisLabel = true;
  xAxisLabel = 'Product Name';
  showYAxisLabel = true;
  yAxisLabel = 'Total';
 

  colorScheme = {
    domain: ['#444b8f', '#1288a4', '#02cc9c', '#aadb6a']
  };
  colorScheme1 = {
    domain: ['#555454', '#A1CC8', '#C7859C', '#AA2222']
  };

  constructor(public users: UsersService,private router:Router) {
    this.selectedUser=JSON.parse(localStorage.getItem(`selectedUser`));
    
  }
   
  
  getUsers() {
   

      this.users.getUserById('e3ce2fdf-6d5b-4d8e-81ae-680b23a1fef8').subscribe(tickets => {
        //console.log(tickets);
  
        tickets.forEach(element => {
          //console.log(element);
          this.userListItem.push({ "name" : element.productName, "value": element.total });
        });
  
        this.done = true;
        this.getPayment();
  
        console.log(this.userListItem);
      })
      //this.users.getAllrequestAtOnce('e3ce2fdf-6d5b-4d8e-81ae-680b23a1fef8');
     
  }
  getPayment():void{

    this.users.getProductByPaymentMode('e3ce2fdf-6d5b-4d8e-81ae-680b23a1fef8').subscribe(payments => {
      //console.log(payments);

      payments.forEach(element => {
        console.log(element);
        this.payamentListItem.push({ "name" : element.paymentMode, "value": element.total });
      });

      this.done = true;
      console.log(this.payamentListItem);
    })
  }
  ngOnInit() {

    this.getUsers();
  }
onSelecting(user:User):void{
  
  this.selectedUser=user;
  //console.log(user.name);
  this.clicked=true;
  this.users.getUserById('e3ce2fdf-6d5b-4d8e-81ae-680b23a1fef8')
  console.log(this.selectedUser.productName);
 // this.router.navigate(['/userdetails',user.id]);
  //this.userListItem.push({"name" :this.selectedUser.name, "value":this.selectedUser.value,"id":this.selectedUser.id})
  //this.router.navigate(['userdetails'],{ queryParams: {Id:user.id} }) ;
  
  //this.getUserById(user.id);
  
}

}



