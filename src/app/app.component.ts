import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Around Whitefield';
  
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
