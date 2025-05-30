import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-letter',
  imports: [CommonModule,FormsModule],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent {

}
