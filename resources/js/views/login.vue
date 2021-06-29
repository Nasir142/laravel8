<template>
  <div class="main">
    <div class="left-side">
      <div class="left-box">
        <img class="register-img" src="../assets/register.svg" alt="register" />
        <h1>A few more clicks to sign in to your account.</h1>
        <p>Manage all your files in one place</p>
      </div>
    </div>
    <div class="right-side">
      <div class="overlay">
        <div class="right-box">
          <h1>Sign In</h1>
          <form class="form-container" @submit.prevent="loginHandler()">
            <div class="input-contianer">
              <input
                type="email"
                placeholder="Email"
                v-model="email"
                required
              />
              <p class="err">email field is required</p>
            </div>
            <div class="input-contianer">
              <input
                type="password"
                placeholder="Password"
                required
                v-model="password"
              />
              <p class="err">email field is required</p>
            </div>
            <div class="btn-container">
              <button class="blue-btn" @click.prevent="goToRegister()">
                Register
              </button>
              <button class="white-btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      email: "nasir@email.com",
      password: "password",
    };
  },
  methods: {
    ...mapActions({ _loginHandler: "LOGIN_HANDLER" }),
    loginHandler() {
      this._loginHandler({ email: this.email, password: this.password })
        .then(() => {
          this.$router.replace({ name: "dashboard" });
        })
        .catch(() => {
          this.$toast.show("login failed unauthorized");
        });
    },
    goToRegister() {
      this.$router.push("register");
    },
  },
};
</script>

<style  scoped>
@import url("../styles/authStyles.css");
</style>