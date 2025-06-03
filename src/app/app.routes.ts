import { RedirectCommand, Routes } from '@angular/router';
import { LetterComponent } from './pages/letter/letter.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path : 'letter', component : LetterComponent},
    {path : 'register', component : RegisterComponent}
];
