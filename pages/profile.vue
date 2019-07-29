<template>
  <div>
    <v-card class="cardprofile">
      <img src="../assets/user.png" aspect-ratio="1.7" />
      <div class="bio">
        <span class="username">{{user.username}}</span>
        <br />
        <span>{{user.bio}}</span>
      </div>
    </v-card>

    <v-card class="cardauth">
      <v-tabs v-model="tab" color="cyan" grow>
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>

        <v-tab-item key="my posts">
          <v-timeline>
            <v-timeline-item v-for="post in posts" :key="post" small fill-dot>
              <v-card max-width="344" class="mx-auto">
                <v-card-title>
                  <v-avatar color="indigo" size="25">
                    <!-- <span class="white--text headline">36</span> -->
                  </v-avatar>
                  <span class="">{{post.username}}</span>
                </v-card-title>
                <v-card-text>{{post.content}}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-tab-item>
        <v-tab-item key="my connections">
          <v-card class="childrequestCard">
            <div class="friendRequest">
              <v-avatar
                class="profile"
                :size="$vuetify.breakpoint.smAndUp ? 164 : 128"
                color="grey"
                tile
              >
                <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
              </v-avatar>
              <div>usernmae</div>
              <div>
                <v-btn>decline</v-btn>
                <v-btn>accept</v-btn>
              </div>
            </div>
          </v-card>
        </v-tab-item>
        <v-tab-item key="child connections">
          <v-card class="childrequestCard">
            <div class="friendRequest">
              <v-avatar
                class="profile"
                :size="$vuetify.breakpoint.smAndUp ? 164 : 128"
                color="grey"
                tile
              >
                <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
              </v-avatar>
              <div>usernmae</div>
              <div>
                <v-btn>decline</v-btn>
                <v-btn>accept</v-btn>
              </div>
            </div>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["my posts", "my connections", "child connections"],
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
      user: {}
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'))
  }
};
</script>



<style>
.cardprofile {
  margin: 20px 200px;
  padding: 18px;
}

.friendRequest {
  text-align: center;
}

.childrequestCard {
  width: 301px;
  background: wheat !important;
  border-radius: 30px;
  margin: 40px;
  padding: 20px;
}

.bio {
  float: right;
  width: 75%;
}

.username {
  font-size: 25px;
  text-transform: capitalize;
}

.lists {
  display: flex;
  height: 50px;
  padding: 10px;
  margin: 20px 200px;
}
</style>