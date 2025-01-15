import { Component } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
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

  isEditMode = false;
  noteId: number | null = null;

  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.noteId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.noteId) {
      this.isEditMode = true;
      this.noteService.getNoteById(this.noteId).subscribe((note) => {
        this.note = note;
        this.note_title.setValue(note.title);
        this.note_content.setValue(note.content);
        this.note_category.setValue(note.category);
      });
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    const updatedNote: Note = {
      ...this.note,
      title: this.note_title.value || '',
      content: this.note_content.value || '',
      category: this.note_category.value || '',
    };

    if (this.isEditMode && this.noteId !== null) {
      this.noteService.editNote(this.noteId, updatedNote).subscribe(() => {
        this.router.navigate(['/notes']);
      });
    } else {
      this.noteService.createNote(updatedNote).subscribe(() => {
        this.router.navigate(['/notes']);
      });
    }
  }
}
