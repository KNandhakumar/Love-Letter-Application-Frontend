import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Letter } from '../../letter.model';

@Component({
  selector: 'app-letter',
  imports: [CommonModule,FormsModule],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent {
  // send letter
  letter:Letter = {
    toWhom: '',
    fromWhom: '',
    message: '',
    date: ''
  }

  submitLetter(){
    console.log("letter submitted",this.letter);
  }
}
