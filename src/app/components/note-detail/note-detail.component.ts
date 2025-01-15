import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NoteService, Note } from '../../services/note.service';

@Component({
  selector: 'app-note-detail',
  imports: [RouterModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {
  note: Note = {
    id: 0,
    title: '',
    content: '',
    category: '',
    created_at: ''
  };

  constructor(private route: ActivatedRoute, private noteService: NoteService, private router: Router) {}

  ngOnInit(): void {
    const noteId = Number(this.route.snapshot.paramMap.get('id'));
    this.noteService.getNoteById(noteId).subscribe((data) => {
      this.note = data;
    });
  }
}
