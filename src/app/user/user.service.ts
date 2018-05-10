import { Injectable } from "@angular/core";
import { of } from 'rxjs/observable/of';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
  
  private subject = new BehaviorSubject(new UserEntity({firstName: 'firstName', lastName: 'lastName', age:1}));
  constructor() {}

  getUser() {
    //console.log(this.subject);
    return this.subject;
  }

  createUser(data) {

    this.subject.next(data);
    return of({done: true})
  }

  updateUser(data) {
    this.subject.next(data);
    return of({done: true})
  }
}
