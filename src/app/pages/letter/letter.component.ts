import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Letter } from '../../letter.model';
import { LetterService } from '../../letter.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-letter',
  imports: [CommonModule,FormsModule,ToastrModule],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent implements OnInit {
  constructor(private letterService:LetterService,private toastr:ToastrService){}

  // get all letters
  letters:Letter[] = [];
  ngOnInit(): void {
      this.letterService.getAllLetter().subscribe((data) => {
        this.letters = data;
      })
  }

  // send letter
  letter:Letter = {
    toWhom: '',
    fromWhom: '',
    message: '',
    date: ''
  }

  submitLetter() {
  this.letterService.sendLetter(this.letter).subscribe({
    next: (response) => {
      this.toastr.success('Letter sent successfully!', 'Success 💖');
      console.log('Letter sent successfully!', response);
      this.letter = {
        toWhom: '',
        fromWhom: '',
        message: '',
        date: ''
      };
      this.ngOnInit(); // refresh letters
    },
    error: (error) => {
      this.toastr.error('Failed to send letter', 'Error 😢');
      console.error(error);
    }
  });
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

  // delete letter
  deleteLetter(id:number){
    if(confirm('Are you sure, you want to delete this Love letter? 💔')){
      this.letterService.deleteLetter(id).subscribe(() => {
        this.ngOnInit(); // refresh list
      })
    }
  }
}