import { RedirectCommand, Routes } from '@angular/router';
import { LetterComponent } from './pages/letter/letter.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path : 'letter', component : LetterComponent},
    {path : 'register', component : RegisterComponent},
    {path : 'login', component : LoginComponent}
];
