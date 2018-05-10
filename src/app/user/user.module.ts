import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from "./user-page.component";
import { UserGuard } from "./user.guard";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [UserPageComponent],
  exports: [UserPageComponent, SharedModule],
  providers: [UserGuard, UserService]
})
export class UserModule { }
