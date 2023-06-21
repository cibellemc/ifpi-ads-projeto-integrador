import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent {
  name: string = ''
  registration: string = ''

  submitForm() {
    // Aqui você pode enviar os dados para a API
    const formData = {
      name: this.name,
      registration: this.registration
    };

    console.log(formData);
  }
}
