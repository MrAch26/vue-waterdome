import { createApp } from 'vue'
import App from './App.vue'

// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { store } from './store'
import { createRouter, createWebHistory } from 'vue-router';

import {firebaseConfig} from './secret.js' 

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./components/Navbar.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("./components/Dashboard.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./components/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("./components/Dashboard.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

initializeApp(firebaseConfig);
var auth = getAuth();

auth.onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});

// auth.onAuthStateChanged(function(user) {
//     if (user) {
//         store.dispatch("fetchUser", user)
//     }
//   });

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')


// createApp(App).mount('#app')



// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// createApp(App).mount('#app')


// Vue.config.productionTip = false;