import Vue from 'vue';
import Vuex from 'vuex';
import { IFooState } from '@/store/modules/foo';

Vue.use(Vuex);

export interface IRootState {
  foo: IFooState;
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({});
