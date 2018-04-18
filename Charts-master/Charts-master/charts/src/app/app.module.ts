import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { environment } from "../environments/environment";
import { AppRoutes } from "./app.routes";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { AppNavbarComponent } from "./common/app-navbar/app-navbar.component";
import { HomeComponent } from "./views/home/home.component";
import { UsersService } from "./services/users.service";
import { UserdetailsComponent } from './userdetails/userdetails.component';

@NgModule({
  declarations: [AppComponent, AppNavbarComponent, HomeComponent, UserdetailsComponent],
  imports: [
    BrowserModule,
    AppRoutes,
    NgxChartsModule,
    BrowserAnimationsModule ,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
