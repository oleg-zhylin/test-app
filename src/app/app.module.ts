import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { UserModule } from "./user/user.module";
import { routing } from "./app.router";
import { RegisterComponent } from "./register/register.component";
import { UserGuard } from "./user/user.guard";


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    UserModule,
    routing,
  ],
  providers: [
     {
      provide: HTTP_INTERCEPTORS,
      useClass: UserGuard,
      multi: true
    },

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
