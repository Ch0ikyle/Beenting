<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12" style = "margin-top:calc(100% - 50%);">
        <p style = "font-size:55px;font-weight:bold;text-align:center">Beantin<span style = "color:#93e77f">g</span></p>
        <v-card-text>
          <v-form>
            <v-text-field prepend-icon="person" v-model="form.id" label="아이디" type="text"></v-text-field>
            <v-text-field prepend-icon="lock" v-model="form.password" label="비밀번호" type="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#93e77f" @click="signIn"><font color="#ffffff">로그인</font></v-btn>
          <v-btn color="#93e77f" @click="signUp"><font color="#ffffff">회원가입</font></v-btn>
        </v-card-actions> 
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import HelloWorld from '../views/login.vue'

export default {
  data () {
    return {
      form: {
        id: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      axios.post('http://10.120.72.66:3500/api/auth/login', this.form)
        .then(r => {
            if (!r.data.success)
              localStorage.setItem('token', r.data.token) 
              this.$router.push('/ChatList') 
          })
        .catch(e => console.error(e.message))
    },
    signUp () {
      this.$router.push('/studentLogin') 
    }
  },
  components: {
    HelloWorld,
  }
}

</script>

<style scoped>

</style>
