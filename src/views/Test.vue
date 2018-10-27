<template>
  <div class="test">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import { syllabusAppend } from '@/api/test';

export default {
  name: 'test',
  components: {
    HelloWorld
  },
  mounted() {
    console.log('This is a test.');

    // Success
    // login({ user: 'lutz', password: '123456789' }).then(res =>
    //   console.log(res)
    // );

    // echars({ c: 'line-stack' }).then(res => console.log(res));

    // Fail
    // loginFail({ user: 'lutz', password: '123456789' })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));

    syllabusAppend({ name: 'lutz' }).then(res => console.log(res));
  }
};
</script>
