import { Component, OnInit } from '@angular/core';
import * as fromTodo from '../../todo/todo.actions';
import * as fromFiltro from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { EDITAR_TODO } from '../todo.actions';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltro.filtrosValidos [] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtrosValidos;
  tareasPendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
      this.store.subscribe( state => {
          this.contarPendientes( state.todos );
          this.filtroActual = state.filtro;
      });
  }

  cambiarFiltro( nuevoFiltro: fromFiltro.filtrosValidos ) {
      const accion = new fromFiltro.SetFiltroAction( nuevoFiltro );
      this.store.dispatch(accion);
  }

  contarPendientes( todos: Todo[] ) {

      this.tareasPendientes = todos.filter( todo => !todo.completado ).length;

  }

  borrarAllTodo() {
    const accion = new fromTodo.BorrarAllTodoAction();
    this.store.dispatch(accion);
  }

}
