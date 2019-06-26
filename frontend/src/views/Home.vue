<template>
  <div class="home">
    <Beeting/>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/studentLogin.vue'
import Beeting from '@/components/About.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Beeting
  }
}

</script>
