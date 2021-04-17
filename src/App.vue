<template>
  <v-app>
    <v-app-bar color="primary" app clipped-right dark>
      <v-container class="d-flex justify-space-between" fluid>
        <v-app-bar-title>Vue 2 showreel</v-app-bar-title>

        <nav>
          <v-btn class="mx-1" to="/" outlined>Home</v-btn>
          <v-btn class="mx-1" to="/about" outlined>About</v-btn>
        </nav>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer :padless="'padless'" app color="primary" dark>
      <pre>The foo now is: {{ foo }}</pre>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FooModule, IFooState } from '@/store/modules/foo';

import HelloWorld from './components/HelloWorld.vue';

@Component({
  name: 'App',
  components: {
    HelloWorld,
  },
})
export default class extends Vue {
  get foo(): IFooState['foo'] {
    return FooModule.foo;
  }

  private updateFoo(value: IFooState['foo']): void {
    FooModule.updateState(value);
  }
}
</script>
