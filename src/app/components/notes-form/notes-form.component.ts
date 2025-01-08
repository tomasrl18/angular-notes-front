import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NoteService, Note } from '../../services/note.service';

@Component({
  selector: 'app-notes-form',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './notes-form.component.html',
  styleUrl: './notes-form.component.css'
})
export class NotesFormComponent {
  note_title = new FormControl('');
  note_content = new FormControl('');
  note_category = new FormControl('');
  
  note: Note = {
    id: 0,
    title: '',
    content: '',
    category: '',
    created_at: ''
  };

  constructor(private noteService: NoteService, private router: Router) {}

  onSubmit(event: Event): void {
    event.preventDefault();

    this.note.title = this.note_title.value || '';
    this.note.content = this.note_content.value || '';
    this.note.category = this.note_category.value || '';

    this.noteService.createNote(this.note).subscribe(() => {
      this.router.navigate(['/notes']);
    });
  }
}
