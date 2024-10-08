import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; // Importa le variabili d'ambiente
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dedaloai-client-script',
  templateUrl: './dedaloai-client-script.component.html',
  styleUrls: ['./dedaloai-client-script.component.scss'],
  standalone: true
})

@Injectable({
  providedIn: 'root'
})
export class DedaloAIClientScript implements OnInit {

  private dedaloai_scriptUrl = environment.dedaloai_scriptUrl;
  private dedaloai_apiKey = environment.dedaloai_apiKey;
  private dedaloai_projectId = environment.dedaloai_projectId;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Crea un elemento <script>
    const script = this.renderer.createElement('script');
    script.src = this.dedaloai_scriptUrl;
    script.setAttribute('data-apikey', this.dedaloai_apiKey);
    script.setAttribute('data-projectid', this.dedaloai_projectId);
    script.type = 'text/javascript';
    script.defer = true;

    // Appendi lo script all'elemento body
    this.renderer.appendChild(document.body, script);
  }
}
