import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environment';
import { LoginDto } from '../dto/login.dto';
import { TokenDto } from '../dto/token.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl
  currenUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) {
    this.Logs('AutenticacionService corriendo');
    // Inicio variable de usuario actual
    this.currenUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));

  }

  //  Trae usuario actual del sessionStorage como objeto
  get UsuarioAutenticado() {
    return this.currenUserSubject.value;
   }

  // Inicio de sesion con credenciales
  login(login:LoginDto):Observable<TokenDto>{
    const result = this.http.post( this.apiUrl + 'auth/login', login) as Observable<TokenDto>;
    
    return result
  }

  saveToken(value:TokenDto){
    localStorage.setItem('access_token',JSON.stringify(value.access_token))
    this.Logs('jwt guardado en localstorage')
  }

  getAuthorizationToken():string | string[] {
    return ''
  }

  // Logger

  Logs(message:any,level?:"log"|"warn"|"error"|"info"|"debug"){
     level? message : console.log(message);
     (level=="log")? console.log(message) : message;
     (level=="warn")? console.warn(message) : message;
     (level=="error")? console.error(message) : message;
     (level=="info")? console.info(message) : message;
     (level=="debug")? console.debug(message) : message;
    return
  }
}
