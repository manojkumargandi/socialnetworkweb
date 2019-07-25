
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
            <v-btn color="success">Sign In</v-btn>
          </div>
        </v-tab-item>
        <v-tab-item key="signup">
          <div>
            <v-text-field v-model="firstname" label="First name" counter></v-text-field>
            <v-text-field v-model="lastname" label="Last name" counter></v-text-field>
            <v-text-field v-model="dob" label="Date of birst" type="date"></v-text-field>
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

            <v-btn color="success">Sign Up</v-btn>
          </div>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      show1: false,
      password: "",
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

