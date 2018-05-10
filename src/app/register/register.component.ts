import { Component, OnDestroy, OnInit } from "@angular/core";
import { UserService } from "../user/user.service";
import { Router } from "@angular/router";
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'app-register',
  template: `
<section class="container">
    <div class="card">
        <div class="card-body">
            <app-form (sendSubmit)="submit($event)" [isEdit]="false" [error]="error"></app-form>
        </div>
    </div>    
</section>
  `
})
export class RegisterComponent implements OnDestroy {
  private user$: ISubscription;
  error = null;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.user$ = userService.getUser().subscribe((data: any) => {
      if (data && data.firstName)
        this.router.navigate(['dashboard'])
    })
  }

  ngOnDestroy() {
    this.user$.unsubscribe();
  }

  submit(event) {
    this.userService.createUser(event);
  }
}
