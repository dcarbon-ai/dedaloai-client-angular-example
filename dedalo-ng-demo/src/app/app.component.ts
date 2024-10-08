import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DedaloAIClientScript } from './dedaloai-client-script/dedaloai-client-script.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DedaloAIClientScript],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dedalo-ng-demo';
}
