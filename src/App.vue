<template lang="pug">
  v-app
    v-app-bar(color="primary" app clipped-right dark)
      v-container(class="d-flex justify-space-between" fluid)
        v-app-bar-title Vue 2 showreel
        nav
          v-btn(class="mx-1" :to="{ name: 'Home' }" outlined) Home
          v-btn(class="mx-1" :to="{ name: 'About' }" outlined) About
    v-main
      v-container(fluid)
        router-view
    v-footer(color="primary" app dark padless)
      pre The foo now is: {{ foo }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FooModule, IFooState } from '@/store/modules/foo';

@Component({
  name: 'App',
})
export default class extends Vue {
  get foo(): IFooState['foo'] {
    return FooModule.foo;
  }
}
</script>
