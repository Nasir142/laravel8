<template>
  <div class="main">
    <div class="left-side">
      <div class="left-box">
        <img class="register-img" src="../assets/register.svg" alt="register" />
        <h1>A few more clicks to sign up to your account.</h1>
        <p>Manage all your files in one place</p>
      </div>
    </div>
    <div class="right-side">
      <div class="overlay">
        <div class="right-box">
          <h1>Sign Up</h1>
          <div class="form-container">
            <div class="input-contianer">
              <input type="text" placeholder="Your Name" />
            </div>
            <div class="input-contianer">
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-contianer">
              <input type="password" placeholder="Password" />
            </div>

            <div class="input-contianer">
              <input type="password" placeholder="Password Confirmation" />
            </div>
            <div class="term">
              <input type="checkbox" class="checkbox" />
              <p>I agree to the apkstash<a href="#">Privacy Policy</a></p>
            </div>
            <div class="btn-container">
              <button class="blue-btn">Register</button>
              <button class="white-btn" @click.prevent="goToLogin()">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push("login");
    },
  },
};
</script>

<style  scoped>
@import url("../styles/authStyles.css");
</style>