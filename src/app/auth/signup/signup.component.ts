import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/app/shared/models/role.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  focusListener$: Observable<{ focused: boolean, el: string }>
  user = {
    name: '',
    email: '',
    password: '',
    role: Role.user
  }

  constructor(private uiService: UiService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.focusListener$ = this.uiService.isFocused


  }

  onSubmit(formData) {

    this.authService.registerUser(this.user)
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle(false)
  }

  loginWithFacebook() {
    this.authService.loginWithFacebooke(false)
  }

}
