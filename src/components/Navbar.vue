<template>
  <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
    <div class="container">
      <router-link to="/" class="navbar-brand">Vue Firebase Auth</router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav ml-auto">
          <template v-if="user.loggedIn">
            <div class="nav-item">{{user.data.displayName}}</div>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="signOutClick">Sign out</a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link to="login" class="nav-link btn">Login</router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { getAuth, signOut } from "@firebase/auth";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "../secret";

initializeApp(firebaseConfig);
var auth = getAuth();


export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOutClick() {
        auth.signOut()
        .then(() => {
          this.$router.replace({
            name: "Home"
          });
        });
    },
    test() {
        signOut();
      this.$router.replace({
        name: "Home"
      });
      console.log("test");
    }
  }
};
</script>

<style>
.btn {
  padding: 10px;
  background-color: #3ac0c0;
  color: white;
  text-decoration: none;
}


</style>