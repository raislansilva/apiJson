import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { JsonPipe } from '../../../node_modules/@angular/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  List: Array<any[]> = []

  constructor(public navCtrl: NavController) {

  }

  recursos() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  listaRecursos() {
    fetch(' https://jsonplaceholder.typicode.com/posts ')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  criarRecursos() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      }),
      headers: {
        "Content-Type": "aplication/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  atualizarRecurso() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
      }),
      headers: {
        "Content-Type": "aplication/json; charset=UTF-8"
      }

    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  excluirRecurso() {
    fetch(' https://jsonplaceholder.typicode.com/posts/1 ', {
      method: ' DELETE '
    })
  }

  filtraRecurso() {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(response => response.json())
      .then(json => console.log(json))
  }

}
