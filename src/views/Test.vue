<template>
  <div class="test">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import * as test from '@/api/test';

export default {
  name: 'test',

  components: {
    HelloWorld
  },

  mounted() {
    console.log('This is a test.');

    // Success
    test
      .login({ user: 'lutz', password: '123456789' })
      .then(res => console.log(res));

    test.echars({ c: 'line-stack' }).then(res => console.log(res));

    // Fail
    // test
    //   .loginFail({ user: 'lutz', password: '123456789' })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));

    // test.syllabusAppend({ name: 'lutz' }).then(res => console.log(res));
  }
};
</script>
