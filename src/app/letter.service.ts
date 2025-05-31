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
  // get all letters
  getAllLetter():Observable<Letter[]>{
    return this.http.get<Letter[]>(this.apiUrl);
  }
  // update letter
  updateLetter(id:number,updatedLetter:Letter):Observable<Letter>{
    return this.http.put<Letter>(`${this.apiUrl}/${id}`,updatedLetter);
  }
  //delete letter
  deleteLetter(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
