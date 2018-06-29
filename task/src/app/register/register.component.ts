import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../models/user';
import { AlertService, UserService } from '../_services/index';
@Component({
  selector: 'app-register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model = new User();
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    alert(JSON.stringify(data));
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
