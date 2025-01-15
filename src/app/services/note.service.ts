import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Note {
  id: number;
  title: string;
  content: string;
  category: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = 'http://127.0.0.1:8000/api/notes/';

  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, note);
  }

  editNote(id: number, note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.apiUrl}${id}/`, note);
  }

  destroyNote(id: number): Observable<Note> {
    return this.http.delete<Note>(`${this.apiUrl}${id}/`);
  }

  getNoteById(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.apiUrl}${id}/`);
  }
}
