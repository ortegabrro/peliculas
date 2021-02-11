import { Injectable } from '@angular/core';
import { Observable, timer, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { SesionService } from './sesion.service';


@Injectable()
export class LoginService {

  constructor(public session: SesionService) { }

  login(username: string, password: string): Observable<string> {
    return timer(1000)
      .pipe(
        map(x => {
          if (username === 'admin' && password === 'admin') {
            return { success: true, token: 'abc', error: null };
          } else {
            return { succes: false, token: null, error: 'Usuario o contraseña erroneos' };
          }
        }),
        map(x => {
          if (x.error) {
            throw new Error(x.error);
          } else {
            this.session.logged = true;
            this.session.token = x.token;
            return x.token;
          }
        })
      );

  }

}
