import { Component, OnInit } from '@angular/core';
import {AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {UsersService} from "../../shared/services/users.service";
import {Router} from "@angular/router";
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'app-regstration',
  templateUrl: './regstration.component.html',
  styleUrls: ['./regstration.component.css']
})
export class RegstrationComponent implements OnInit {

  form: FormGroup;
  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]/*, this.forbiddenEmails.bind(this) as AsyncValidatorFn*/),
      'name': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'agree': new FormControl(true, [Validators.requiredTrue])
    })
  }

  // forbiddenEmails(control: FormControl): Promise<any>{
  //   return new Promise((resolve, reject) => {
  //     this.usersService.getUsers(control.value).subscribe((user: User) => {
  //       if (user) {
  //         resolve({forbiddenEmail:true});
  //       } else{
  //         resolve(null);
  //       }
  //     })
  //   })
  // }

  onSubmit(){
    const {email, password, name} = this.form.value;
    const user = new User(email, password, name);

    this.usersService.createUser(user).subscribe( () => {
      this.router.navigate(['/login'], {
        queryParams: {
          canLogin: true
        }
      })
    })
  }

}
