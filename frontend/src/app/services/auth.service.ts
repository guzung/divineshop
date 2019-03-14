import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../constants';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {
  }


  login(user: string, pass: string): Observable<any> {
    const method = '/login';

    return this.http.post<Observable<boolean>>(Constants.API_HOLY_REPOSITORY + method, {
      username: user,
      password: pass
    });
  }

  signin(user: string, pass: string): Observable<any> {
    const method = '/signin';

    return this.http.post<Observable<boolean>>(Constants.API_HOLY_REPOSITORY + method, {
      username: user,
      password: pass
    });
  }
}
