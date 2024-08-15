import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  private router = inject(Router);

  get routerLink() {
    return this.router.url;
  }

}
