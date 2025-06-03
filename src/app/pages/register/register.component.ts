import { LetterService } from './../../letter.service';
import { Component } from '@angular/core';
import { Register } from '../../model/auth/register.model';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private letterService:LetterService){}

  
  // user register
  registerData:Register = {
    name: '',
    email: '',
    password: ''
  }
  userRegister(){
    this.letterService.userRegister(this.registerData).subscribe((responce) =>{
      console.log('Register successfully!',responce);
      alert('Register successful!');
    })
  }
}
