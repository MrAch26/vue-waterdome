<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Dashboard</div>
          <div class="card-body">
            <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>
            <br>
            <a class="btn" href="#" @click.prevent="signOutClick">Sign out</a>
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