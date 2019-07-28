<template>
  <div class="childdiv">
    <v-card class="childcard">
      <div class="childTitle">Create child</div>
      <v-text-field v-model="firstname" label="First name" counter></v-text-field>
      <v-text-field v-model="lastname" label="Last name" counter></v-text-field>
      <v-text-field v-model="dob" label="Date of birst" type="date"></v-text-field>
      <v-text-field v-model="email" :rules="[rules.required, rules.email]" label="E-mail" counter></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'visibility' : 'visibility_off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        label="password"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>
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
.childdiv {
  width: 500px;
  height: auto;
  margin: 30px 500px;
}

.childcard {
  padding: 25px;
}

.childTitle {
    text-transform: uppercase;
    text-align: center;
    font-size: 18px;
}
</style>
