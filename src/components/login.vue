<template>
    <div class="container login-form">
        <h2 class="login-title">- Please Login -</h2>
        <div class="panel panel-default">
            <div class="panel-body">
                <form>
                    <h3 style="color: purple; font-size: 40px; margin-bottom: 30px" align="center">LOGIN FORM</h3>
                    <div class="input-group login-userinput">
                        <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                        <input id="txtUser" type="text" class="form-control" v-model="username" placeholder="Username">
                    </div>
                    <div class="input-group" style="margin-bottom: 30px">
                        <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                        <input id="txtPassword" type="password" class="form-control" v-model="password"
                               placeholder="Password">
                    </div>
                    <button class="btn btn-primary btn-block login-button" @click="loginUser" type="button">
                        <i class="fa fa-sign-in"></i>
                        Login
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import store from '../store'

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginUser () {
      axios.post('http://localhost:8000/api-token-auth/', {'username': this.username, 'password': this.password})
        .then((response) => {
          store.commit('setToken', response.data)
          this.$router.push('/')
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Exo:400,500,500italic,400italic,600,600italic,700,700italic,800,800italic,300,300italic);

body {
  padding-top: 250px;
  background: url(http://www.magic4walls.com/wp-content/uploads/2014/01/texture-blue-fonchik-simple-dark-colors-glow-background.jpg) no-repeat;
}

.login-form{width:600px;}
.login-title{font-family: 'Exo', sans-serif;text-align:center;}
.login-userinput{margin-bottom: 30px;}
.login-button{margin-top:10px; margin-bottom: 30px;}
.login-options{margin-bottom: 30px;}
</style>
