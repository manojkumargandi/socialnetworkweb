<template>
  <div class="homediv">
    <div class="postdiv">
      <v-textarea solo name="input-7-4" label="Whats on your mind??" v-model="postText"></v-textarea>
      <v-btn class="postbtn" @click="post">POST</v-btn>
    </div>

    <v-timeline>
      <v-timeline-item v-for="post in posts" :key="post" small fill-dot>
        <v-card max-width="344" class="mx-auto">
          <v-card-title>
            <v-avatar color="indigo" size="25">
              <!-- <span class="white--text headline">36</span> -->
            </v-avatar>
            <span class="username">{{post.username}}</span>
          </v-card-title>
          <v-card-text>{{post.content}}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      postText: "",
      user: {}
    };
  },
  methods: {
    post() {
      var data = {};
      data.content = this.postText;
      var email = this.user.email;
      data.username = user.firstname;
      this.posts.unshift(data);
      var details = {};
      details.content = this.postText;
      details.date = new Date();
      details.email = email;
      axios
        .post("http://localhost:3001/api/createStatus", details)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    var email = this.user.email;
    axios
      .get("http://localhost:3001/api/getposts", {params:{email: email}})
      .then((response) => {
        console.log(response);
        response.data.forEach(item => {
          var data = {}
          data.date = item.p.properties.date
          data.content = item.p.properties.content
          data.username = item.u.properties.username
          this.posts.push(data)
        });
        
        console.log(this.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>

<style>
.homediv {
  margin: 50px 280px;
  /* border: solid grey 0.5px; */
}

.postbtn {
  position: absolute !important;
  bottom: 29px;
  right: 0;
  background: #1976d2 !important;
  color: #ffffff !important;
}

.postdiv {
  position: relative;
}

.username {
  margin: 0 10px;
}
</style>