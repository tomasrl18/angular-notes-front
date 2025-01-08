import { Routes } from '@angular/router';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NotesFormComponent } from './components/notes-form/notes-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'notes', component: NotesListComponent },
  { path: 'notes/create', component: NotesFormComponent },
];
