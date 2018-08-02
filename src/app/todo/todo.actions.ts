import {Action} from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar Todo';
export const EDITAR_TODO = '[TODO] Editar Todo';
export const BORRAR_TODO = '[TODO] Borrar Todo';
export const BORRAR_ALL_TODO = '[TODO] Borrar all Todo';
export const TOGGLE_TODO = '[TODO] Toggle Todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle All Todo';


export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;


  constructor ( public texto: string ) {

  }
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;

    constructor ( public id: number, public texto: string ) {

    }
}

export class BorrarTodoAction implements Action {
  readonly type = BORRAR_TODO;

  constructor ( public id: number ) {

  }
}

export class BorrarAllTodoAction implements Action {
  readonly type = BORRAR_ALL_TODO;

}

export class ToogleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor ( public id: number ) {

  }
}

export class ToogleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;

  constructor ( public completado: boolean ) {

  }
}

export type Acciones = AgregarTodoAction |
                       EditarTodoAction |
                       BorrarTodoAction |
                       ToogleAllTodoAction |
                       BorrarAllTodoAction |
                       ToogleTodoAction;
