import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';

import store from '@/store';

export interface IFooState {
  foo: number;
}

@Module({ dynamic: true, store, name: 'foo' })
class Foo extends VuexModule implements IFooState {
  public foo = 0;

  @Mutation
  private MUTATE_STATE(newValue: number) {
    this.foo = newValue;
  }

  @Action({ commit: 'MUTATE_STATE' })
  public updateState(value: number) {
    return value;
  }
}

export const FooModule = getModule(Foo);
