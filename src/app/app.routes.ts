import { Routes } from '@angular/router';
import { NotesListComponent } from './components/notes-list/notes-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'notes', component: NotesListComponent }
];
