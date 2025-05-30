import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Letter } from '../../letter.model';
import { LetterService } from '../../letter.service';

@Component({
  selector: 'app-letter',
  imports: [CommonModule,FormsModule],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent {
  constructor(private letterService:LetterService){}
  // send letter
  letter:Letter = {
    toWhom: '',
    fromWhom: '',
    message: '',
    date: ''
  }

  submitLetter(){
    this.letterService.sendLetter(this.letter).subscribe((responce) => {
      console.log('Letter send successfully!',responce);
      this.letter = {
        toWhom: '',
        fromWhom: '',
        message: '',
        date: ''
      }
    })
  }
}
