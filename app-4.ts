import {Store, createStore} from 'redux';
import {ContadorReducer} from './contador/contador.reducer';
import {
  incrementadorAction,
  multiplicarAction,
  decrementadorAction,
} from './contador/contador.actions';

const store: Store = createStore(ContadorReducer);

//al suscribirme al store, me permite obtener e imprimir los cambios de estado
store.subscribe(() => console.log('Subs: ', store.getState()));

store.dispatch(incrementadorAction);
store.dispatch(multiplicarAction);
store.dispatch(decrementadorAction);
