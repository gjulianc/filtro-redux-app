import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as fromFiltro from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: fromFiltro.filtrosValidos ): Todo[] {

    switch ( filtro ) {
      case 'todos':
        return todos;

      case 'completados':
        return todos.filter( todo => todo.completado === true);

      case 'pendientes':
        return todos.filter( todo => todo.completado === false);

      default:
        return todos;
    }


  }

}
