import {Reducer, Action} from './ngrx-fake/ngrx';
import {ContadorReducer} from './contador/contador.reducer';
import {
  incrementadorAction,
  multiplicarAction,
} from './contador/contador.actions';

class Store<T> {
  // private state: T;

  constructor(private reducer: Reducer<T>, private state: T) {
    // this.state = state;
  }

  getState() {
    return this.state;
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store(ContadorReducer, 10);
//estado inicial
console.log('Estado inicial: ' + store.getState());
//disparamos la accion de aumentar en 1 el estado actual
store.dispatch(incrementadorAction);
//nuevo estado incrementado en 1
console.log('Nuevo estado: ' + store.getState());
// disparamos la accion de multiplicar
store.dispatch(multiplicarAction);
console.log('Nuevo estado: ' + store.getState());
