import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "../models/user.model";

@Injectable()

export class UsersService{
  constructor( private http: HttpClient) {
  }

  getUsers( email:string): Observable<User>{
    return this.http.get<User[]>('http://localhost:3001/users?"email"=${email}')
      .pipe(map((user: User[]) => user[0] ? user[0] : undefined));
  }

  createUser(user: User){
    return this.http.post('http://localhost:3001/users', user);
  }


}
