<template>
  <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
    <div class="container">
      <router-link to="/" class="navbar-brand">Vue Firebase Auth</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label
      >
        <span class="navbar-toggler-icon"></span>
      </button>
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
              <router-link to="login" class="nav-link">Login</router-link>
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

const firebaseConfig = {
  apiKey: "AIzaSyCX0zFG5goPlhpaQel--z7v8HZOzeIW1YY",
  authDomain: "jewish-welmo.firebaseapp.com",
  projectId: "jewish-welmo",
  storageBucket: "jewish-welmo.appspot.com",
  messagingSenderId: "832115845832",
  appId: "1:832115845832:web:64637a7d35f88da01853fd",
  measurementId: "G-W17LS0QP7J"
};

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