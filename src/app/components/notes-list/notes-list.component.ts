import { Component, OnInit } from '@angular/core';
import { NoteService, Note } from '../../services/note.service';

@Component({
  selector: 'app-notes-list',
  imports: [],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes) => {
      this.notes = notes;
    });
  }

  destroyNota(id: number): void {
    this.noteService.destroyNote(id).subscribe(() => {
      this.notes = this.notes.filter(note => note.id !== id);
    });
  }
}
