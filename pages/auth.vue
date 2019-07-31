
<template>
  <div class="authDiv">
    <v-card class="cardauth">
      <v-tabs v-model="tab" color="cyan" grow>
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>

        <v-tab-item key="signin">
          <div>
            <v-text-field
              v-model="email"
              :rules="[rules.required, rules.email]"
              label="E-mail"
              counter
            ></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              label="password"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-btn color="success" @click="signin()">Sign In</v-btn>
          </div>
        </v-tab-item>
        <v-tab-item key="signup">
          <div>
            <v-text-field v-model="firstname" label="First name" counter></v-text-field>
            <v-text-field v-model="lastname" label="Last name" counter></v-text-field>
            <v-text-field v-model="dob" label="Date of birst" type="date" @mouseup="getAge()"></v-text-field>
            <v-text-field
              v-model="email"
              :rules="[rules.required, rules.email]"
              label="E-mail"
              counter
            ></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              label="password"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn :disabled="enablesignup" color="success" @click="signup()">Sign Up</v-btn>
          </div>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>
<script>

import axios from 'axios'
export default {
  data() {
    return {
      email: "",
      show1: false,
      password: "",
      enablesignup: false,
      firstname: "",
      lastname: "",
      dob: "",
      tab: "",
      items: ["signin", "signup"],
      rules: {
        required: value => !!value || "Required.",
        counter: value => value.length <= 20 || "Max 20 characters",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail";
        },
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  },
  methods: {
    signup() {
      var details = {};
      details.email = this.email
      details.password = this.password
      details.firstname = this.firstname
      details.lastname = this.lastname
      details.dob = this.dob

      var data = details;
      axios
        .post("http://localhost:3001/api/signup", details)
        .then((response) => {
          console.log(response.data[0].u.properties);
          data =  response.data[0].u.properties;
          this.$store.commit('SET_USER', data);
          this.$router.push('/timeline');
        })
        .catch((error) => {
          console.log(error);
        });
    },

    signin() {
      var details = {};
      details.email = this.email
      details.password = this.password
      console.log(details)
      axios
        .post("http://localhost:3001/api/signin", details)
        .then((response) => {
          console.log(response.data[0]);
          var data =  response.data[0];
          this.$store.commit('SET_USER', data);
          this.$router.push('/timeline');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    enableAge() {
      if (this.age < 19) {
        this.enablesignup = true;
      } else {
        this.enablesignup = false;
      }
    },
    getAge() {
      var today = new Date();
      var birthDate = new Date(this.dob);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
      }

      this.age = age;
      this.enableAge();
    }
  }
};
</script>

<style>
.authDiv {
  background: url("../assets/auth2.png");
  background-size: cover;
  height: 89vh;
}

.cardauth {
      width: 650px;
    height: 500px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    padding: 10px;
}
</style>

