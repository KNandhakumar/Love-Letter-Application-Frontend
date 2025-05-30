import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Letter } from '../../letter.model';
import { LetterService } from '../../letter.service';

@Component({
  selector: 'app-letter',
  imports: [CommonModule,FormsModule],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent implements OnInit {
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

  // get all letters
  letters:Letter[] = [];
  ngOnInit(): void {
      this.letterService.getAllLetter().subscribe((data) => {
        this.letters = data;
      })
  }

  // edit letter
  selectedLetter?:Letter | null;
  editLetter(letter:any){
    this.selectedLetter = {...letter }; // copy
  }
  // cancel edit
  cancellEdit(){
    this.selectedLetter = null;
  }

  // update letter
  updateLetter(){
    this.letterService.updateLetter(this.selectedLetter!.id!,this.selectedLetter!).subscribe(() => {
      this.ngOnInit(); // refresh list
      this.selectedLetter = null; // close form
    })
  }
}
