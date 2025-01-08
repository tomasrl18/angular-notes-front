import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NoteService, Note } from '../../services/note.service';

@Component({
  selector: 'app-notes-form',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './notes-form.component.html',
  styleUrl: './notes-form.component.css'
})
export class NotesFormComponent {
  title = new FormControl('');
  content = new FormControl('');
  
  note: Note = {
    id: 0,
    title: '',
    content: '',
    category: '',
    created_at: ''
  };

  onSubmit(): void {}

  /* onSubmit(): void {
    this.noteService.createNote(this.note).subscribe(() => {
      this.router.navigate(['/notes']);
    });
  } */
}
