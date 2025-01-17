import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NoteService, Note } from '../../services/note.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-note-detail',
  imports: [RouterModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css',
  providers: [DatePipe]
})
export class NoteDetailComponent {
  note: Note = {
    id: 0,
    title: '',
    content: '',
    category: '',
    created_at: ''
  };

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    const noteId = Number(this.route.snapshot.paramMap.get('id'));
    this.noteService.getNoteById(noteId).subscribe((data) => {
      this.note = data;
    });
  }

  getFormattedDate(): string {
    return this.datePipe.transform(this.note.created_at, 'dd/MM/yyyy HH:mm') || '';
  }
}
