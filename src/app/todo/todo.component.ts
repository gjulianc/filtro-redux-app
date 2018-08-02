import { Component, OnInit } from '@angular/core';
import { ToogleAllTodoAction } from './todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado: boolean = false;
  constructor(
              private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  toogleAll() {
    // Marcar o desmarcar todas todas las tareas
    this.completado = !this.completado;

    const accion = new ToogleAllTodoAction( this.completado );
    this.store.dispatch( accion );
  }

}
