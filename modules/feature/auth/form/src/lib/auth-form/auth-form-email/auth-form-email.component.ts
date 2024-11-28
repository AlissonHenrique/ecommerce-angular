import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from '../auth-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-auth-form-email',
  standalone: true,
  imports: [CommonModule,MatInputModule,MatButtonModule,ReactiveFormsModule,RouterModule],
  providers:[AuthFormComponent],
  templateUrl: './auth-form-email.component.html',
  styleUrl: './auth-form-email.component.scss',
})
export class AuthFormEmailComponent {
  control = inject(AuthFormComponent).form.controls.email;
}
