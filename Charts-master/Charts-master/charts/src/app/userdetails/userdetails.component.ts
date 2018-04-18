import {Router, ActivatedRoute, Params} from '@angular/router';
import {OnInit, Component, Input} from '@angular/core';
import {User} from '../user';
import { UsersService } from "../services/users.service";
import { id } from "@swimlane/ngx-charts/release/utils";
import { element } from "protractor";
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userListItem :  any[]=[];
  selectedUser: User;
  done :boolean=false;
  
  @Input() user: User;

  view1: any[] = [200, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'name';
  showYAxisLabel = true;
  yAxisLabel = 'age';

  colorScheme1 = {
    domain: ['#555454', '#A1CC8', '#C7859C', '#AA2222']
  };
  constructor(private activatedRoute: ActivatedRoute,private userservice:UsersService) {
    this.selectedUser=JSON.parse(localStorage.getItem(`selectedUser`));
  }

  ngOnInit() {
    
          //this.getUser();
    
  }
  /*getUser():void{

    const id=+this.activatedRoute.snapshot.paramMap.get('id');
    this.userservice.getUserById(id).subscribe(user=>this.user=user);
    this.selectedUser=this.user;
   //this.showUserDetail(this.selectedUser);
    console.log(id);
    
    
  }  
  
  showUserDetail(user:User):void
  {
    this.selectedUser=user;
    console.log(user.name);
    
    console.log("selected user",this.selectedUser.name);
    this.userListItem.push({"name" :this.selectedUser.name, "age":this.selectedUser.age,"id":this.selectedUser.id})
  //this.router.navigate(['userdetails'],{ queryParams: {Id:user.id} }) ;
  console.log(this.userListItem.length);
  //this.getUserById(user.id);
  
  
  }*/

}
