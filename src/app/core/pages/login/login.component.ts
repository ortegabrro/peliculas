import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { finalize } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

// import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loading = false;
  error: string;

  constructor(public service: LoginService,
    public router: Router,
    public route: ActivatedRoute) { }

  ngOnInit() {}

  login() {
    this.loading = true;
    this.service.login(this.username, this.password).pipe(
      finalize(() => this.loading = false)
    ).subscribe(x => {
      this.router.navigate(['estrenos'], { relativeTo: this.route });
    }, err => {
      this.error = err.message;
      setTimeout(() => {
        this.error = null;
      }, 1500);
    });

  }

}
