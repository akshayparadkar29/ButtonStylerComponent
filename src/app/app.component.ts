import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ButtonStylerComponent';
  textStyles = {
    'color': 'blue',      // Change this to your desired text color
    'font-size': '16px'   // Change this to your desired font size
  };
}
