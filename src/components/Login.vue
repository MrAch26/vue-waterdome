<template>
  <!-- <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>

            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div> -->

<body>
    <br><br>
    <div class="flex-container">
        <form action="#" @submit.prevent="submit">
        <div class="login-container" style="padding:10%; border: radius 50px;">
            
              
                <h1 id="title"><span style="color:white;">Water-</span>Dome </h1>
            
            <br>
            <div class="email">

                <label for="email" style="color:white">Email:</label>
                <input
                placeholder="mail@mail.com"
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
            </div>
            <div class="password">
                <label for="password" style="color:white">Password</label>
                <input
                placeholder="*******"
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
            
            </div>
                <button href="#" class="myButton">Login</button>
                
            

            <!-- forgot password -->
            
                <a href="#">Forgot Password?</a>
        

    </div>
        </form>

    </div>
</body>





</template>

<script>
import { signInWithEmailAndPassword} from 'firebase/auth';
import { getAuth } from '@firebase/auth';
var auth = getAuth();
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
        .then(data => {
          this.$router.replace({ name: "Dashboard" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<style>

.email {
    flex-direction: row;
    justify-content: space-between;
}

#title {
    font-size: 30px;
    font-family: "Times New Roman", Times, serif;
    color: #3ac0c0;
}

.flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}       /* Flex container */    


.login-container {
    background-color: #040405;
    display: flex;
    padding: 10px;
    justify-content: space-around;
    border-radius: 10%;
    flex-direction: column;
    align-items: center;

}       /* Flex container */


.myButton {
	background:linear-gradient(to bottom, #0bd7de 5%, #0bd7de 100%);
	background-color:#0bd7de;
	border-radius:4px;
	border:1px solid #0bd7de;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	font-weight:bold;
	padding:13px 76px;
	text-decoration:none;
	text-shadow:0px 0px 0px #3d768a;
}
.myButton:hover {
	background:linear-gradient(to bottom, #0bd7de 5%, #0bd7de 100%);
	background-color:#0bd7de;
}
.myButton:active {
	position:relative;
	top:1px;
}



</style>