import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EmailServiceService } from './services/email-service.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { PersonInterface } from './models/person-interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private email: EmailServiceService, private router: Router) { }


  title = 'contacto';

  private Person: PersonInterface = {
    name : '',
    email : '',
    phone : '',
    message : ''
  }

  loading = false;

  ngOnInit(){
    document.getElementById("name").focus();
  }

  onSend(form: NgForm){
    this.loading = true;
    
    if(form.valid == true){
      
      return this.email.sendMail(this.Person.name, this.Person.email, this.Person.phone, this.Person.message)
      .subscribe( (success)=> {
        Swal.fire(
          'Gracias',
          'El mensaje ha sido enviado correctamente',
          'success'
        )
        form.reset();
      },
      (error) => {
        Swal.fire(
          'Ocurrió un problema',
          'Error: '+error.message,
          'error'
        )
      })
    }

    

  }


}
