import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharcterService {

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    const url = 'http://localhost:3000/characters';
    return this.http.get<Character[]>(url);
  }
}
