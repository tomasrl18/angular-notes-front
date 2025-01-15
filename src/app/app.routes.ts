import { Routes } from '@angular/router';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NotesFormComponent } from './components/notes-form/notes-form.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'notes', component: NotesListComponent },
  { path: 'notes/create', component: NotesFormComponent },
  { path: 'notes/:id', component: NoteDetailComponent },
];
