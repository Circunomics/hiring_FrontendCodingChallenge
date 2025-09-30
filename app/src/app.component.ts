import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {}


  isHeaderNavElementActive(path: string): boolean {
    return this.router.url.includes(path);
  }
}
