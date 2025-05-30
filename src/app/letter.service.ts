import { Letter } from './letter.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LetterService {
  constructor(private http:HttpClient) { }
  // api url
  private apiUrl = 'http://localhost:8080/api/letters';

  // send letter
  sendLetter(letter:Letter):Observable<Letter>{
    return this.http.post<Letter>(this.apiUrl,letter);
  }
}
