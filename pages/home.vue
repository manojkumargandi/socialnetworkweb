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
export default {
  data() {
    return {
      posts: [
        {
          username: "username",
          content: "this is the card text"
        },
        {
          username: "username",
          content: "this is the card text"
        },
        {
          username: "username",
          content: "this is the card text"
        }
      ],
      postText: "",
    }
  },
  methods: {
    post() {
      var data = {};
      data.username = "username"
      data.content = this.postText
      this.posts.unshift(data)
    }
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