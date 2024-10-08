# DedaloAI Client JS Angular Example

Questo progetto è un esempio di come integrare lo script DedaloAI Client JS in un'applicazione Angular.

## Guida all'integrazione

### Integrare lo script DedaloAI Client JS come Componente Angular

Per integrare lo script DedaloAI Client JS in un'applicazione Angular, è possibile creare un componente dedicato che si occupi di inizializzare il client e di gestire le richieste di analisi.

```typescript

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


```

**Nota bene**: Le variabili `dedaloai_scriptUrl`, `dedaloai_apiKey` e `dedaloai_projectId` sono definite nel file `environment.ts` e vengono importate nel componente.

### Utilizzare il componente DedaloAI Client JS

Per utilizzare il componente DedaloAI Client JS in un template Angular, è sufficiente aggiungere il tag `<app-dedaloai-client-script></app-dedaloai-client-script>` al template del componente principale.

```html
<app-dedaloai-client-script></app-dedaloai-client-script>
```


## Clonare il progetto

### Installazione delle dipendenze

Clona il repository e installa le dipendenze con `npm install`.

### Utilizzo

Esegui l'applicazione con `ng serve` e apri il browser all'indirizzo `http://localhost:4200/`.

### Build & Test con Docker

Per eseguire il build dell'applicazione, esegui i seguenti comandi:

```bash
ng build
```
A questo punto è possibile avviare l'applicazione all'interno di un container Docker con il seguente comando:

```bash
# Dalla cartella principale del repository
docker compose up
```

### Licenza

MIT
```

