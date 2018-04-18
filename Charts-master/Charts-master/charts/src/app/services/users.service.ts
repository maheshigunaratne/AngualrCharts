import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {User} from './../user';
import {Ticket} from './../Ticket';
import {Payment} from './../Payment';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class UsersService {
 //url = 'http://localhost:3000/users';
  url='http://localhost:64630/api/TShopSkiItemsApis/';

  constructor(private http: HttpClient) {
    
   }

  getUsers(): Observable<User[]> {
    //return this.http.get(this.url + '?_sort=id&_order=desc');
    
    return this.http.get<User[]>(this.url+ '?_sort=ProductName&_order=desc');
    
    
    
  }
 getUserById(ApplicationID:string):Observable<User[]>{
  const _url= `${this.url}/${ApplicationID}`;
  return this.http.get<User[]>(_url);
  
  
}

getProductByPaymentMode(ApplicationID:string):Observable<User[]>{
  const _url= `${this.url}/${ApplicationID}/paymentmode`;
  return this.http.get<User[]>(_url);
 
}

/*getAllrequestAtOnce(ApplicationID:string): Observable<any> {
  const _url1= `${this.url}/${ApplicationID}`;
  const _url2= `${this.url}/${ApplicationID}/paymentmode`;
  return Observable.forkJoin([

    this.http.get(_url1),
    this.http.get(_url2)
  ])
  .map((data: any[]) => {
    let products: any = data[0];
    let payments: any[] = data[1];
    console.log(products);
    console.log(payments);
  });
}*/
}
