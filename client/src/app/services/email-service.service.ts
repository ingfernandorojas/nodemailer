import { Injectable } from '@angular/core';
import { PersonInterface } from '../models/person-interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private http: HttpClient) { }

   sendMail(name: string, email: string, phone: string, message: string){
    const url_api = 'https://app1.usemoslinux.net/formulario';
    return this.http
    .post<PersonInterface>(url_api, {
      name:name,
      email:email,
      phone:phone,
      message:message
    }
    
    ).pipe(map(data => data));
  }
}
