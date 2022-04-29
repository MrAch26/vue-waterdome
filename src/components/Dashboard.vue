<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Dashboard</div>
          <div class="card-body">
            <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>
            <a class="nav-link" @click.prevent="signOutClick">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>
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