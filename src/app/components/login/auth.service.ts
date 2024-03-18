import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "http://192.168.1.86:3001/login"

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    
  }

}
