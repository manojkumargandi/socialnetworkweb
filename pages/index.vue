<template>
<div class="image">
      
  <v-app >
      <!-- <v-toolbar>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    <v-btn color="success">Login</v-btn>
    <v-btn color="success">Signup</v-btn>
    </v-toolbar> -->
    
  </v-app>
</div>  
</template>

<script>
export default {
  data() {
    return {
      title: 'Social Networking'
    }
  },
  mounted() {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.$router.push('/timeline')
    } else {
      this.$router.push('/auth')
    }
  }
}
</script>

<style>
.image {
  /* The image used */
  background-image: url("../assets/images/sn.jpg");
/* Full height */
  height: 140%;
  width: 105%; 
  
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
>

