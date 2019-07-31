<template>
  <div>
    <v-card class="cardprofile">
      <img src="../assets/user.png" aspect-ratio="1.7" />
      <div class="bio">
        <span class="username">{{user.username}}</span>
        <br />
        <span>{{user.bio}}</span>
        <v-btn v-if="!this.user.child" class="childcreate" @click="createChild()">Create Child</v-btn>
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
                  <span class="postUsername">{{post.username}}</span>
                </v-card-title>
                <v-card-text>{{post.content}}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-tab-item>
        <v-tab-item key="my connections">
          <div class="cardsview">
            <v-card
              v-for="connection in myconnections"
              :key="connection.email"
              class="childrequestCard"
            >
              <div class="friendRequest">
                <v-avatar
                  class="profile"
                  :size="$vuetify.breakpoint.smAndUp ? 164 : 128"
                  color="grey"
                  tile
                >
                  <img src="../assets/user.png" />
                </v-avatar>
                <div class="username">{{connection.username}}</div>
              </div>
            </v-card>
          </div>
        </v-tab-item>
        <v-tab-item key="child connections">
          <div class="cardsview">
            <v-card
              v-for="connection in childConnections"
              :key="connection.email"
              class="childrequestCard"
            >
              <div class="friendRequest">
                <v-avatar
                  class="profile"
                  :size="$vuetify.breakpoint.smAndUp ? 164 : 128"
                  color="grey"
                  tile
                >
                  <img src="../assets/user.png" />
                </v-avatar>
                <div class="username">{{connection.username}}</div>
                <div>
                  <v-btn @click="declineChildrequest(connection.email, connection.childemail)">decline</v-btn>
                  <v-btn @click="acceptChildrequest(connection.email, connection.childemail)">accept</v-btn>
                </div>
              </div>
            </v-card>
          </div>
        </v-tab-item>
        <v-tab-item key="Connection Requests">
          <div class="cardsview">
            <v-card
              v-for="connection in connections"
              :key="connection.email"
              class="childrequestCard"
            >
              <div class="friendRequest">
                <v-avatar
                  class="profile"
                  :size="$vuetify.breakpoint.smAndUp ? 164 : 128"
                  color="grey"
                  tile
                >
                  <img src="../assets/user.png" />
                </v-avatar>
                <div class="username">{{connection.username}}</div>
                <div>
                  <v-btn @click="declinerequest(connection.email)">decline</v-btn>
                  <v-btn @click="acceptrequest(connection.email)">accept</v-btn>
                </div>
              </div>
            </v-card>
          </div>
        </v-tab-item>
        <v-tab-item key="My children">
          <div class="cardsview">
            <v-card v-for="connection in children" :key="connection.email" class="childrequestCard">
              <div class="friendRequest">
                <v-avatar
                  class="profile"
                  :size="$vuetify.breakpoint.smAndUp ? 164 : 128"
                  color="grey"
                  tile
                >
                  <img src="../assets/user.png" />
                </v-avatar>
                <div class="username">{{connection.username}}</div>
              </div>
            </v-card>
          </div>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      posts: [],
      user: {},
      connections: [],
      children: [],
      myconnections: [],
      childConnections: []
    };
  },
  methods: {
    acceptrequest(rid) {
      var details = {};
      (details.sid = rid), (details.rid = this.user.email);
      axios
        .post("http://localhost:3001/api/makeconnection", details)
        .then(response => {
          console.log(response);
          var heros = this.connections.filter(function(connection) {
            return connection.email != rid;
          });
          this.connections = heros;
        })
        .catch(error => {
          console.log(error);
        });
    },
    acceptChildrequest(rid, sid) {
      console.log(rid, sid, "req");
      var details = {};
      (details.sid = sid), (details.rid = rid);
      axios
        .post("http://localhost:3001/api/makeconnection", details)
        .then(response => {
          console.log(response);
          var heros = this.connections.filter(function(connection) {
            return connection.email != rid;
          });
          this.connections = heros;
        })
        .catch(error => {
          console.log(error);
        });
    },
    declinerequest(rid) {
      var details = {};
      (details.rid = rid), (details.sid = this.user.email);
      axios
        .post("http://localhost:3001/api/deleteConnection", details)
        .then(response => {
          console.log(response);
          var heros = this.childConnections.filter(function(connection) {
            return connection.email != rid;
          });
          this.childConnections = heros;
        })
        .catch(error => {
          console.log(error);
        });
    },
    
    declineChildrequest(rid, sid) {
      var details = {};
      (details.rid = rid), (details.sid = sid);
      axios
        .post("http://localhost:3001/api/deleteConnection", details)
        .then(response => {
          console.log(response);
          var heros = this.childConnections.filter(function(connection) {
            return connection.email != rid;
          });
          this.childConnections = heros;
        })
        .catch(error => {
          console.log(error);
        });
    },
    createChild() {
      this.$router.push("/child");
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));

    if (this.user.child) {
      this.items = ["my posts", "my connections", "Connection Requests"];
    } else {
      this.items = [
        "my posts",
        "my connections",
        "child connections",
        "Connection Requests",
        "My children"
      ];
    }

    axios
      .get("http://localhost:3001/api/getConnections", {
        params: { sid: this.user.email }
      })
      .then(response => {
        console.log(response);
        response.data.forEach(item => {
          this.connections.push(item);
        });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("http://localhost:3001/api/getposts", {
        params: { email: this.user.email }
      })
      .then(response => {
        console.log(response);
        response.data.forEach(item => {
          var data = {};

          // if (item.p) {
            data.date = item.p.properties.date;
            data.content = item.p.properties.content;
            data.username = item.u.properties.username;
          // } else if (item.p1) {
            // data.date = item.p1.properties.date;
            // data.content = item.p1.properties.content;
            // data.username = item.b.properties.username;
          // }
          this.posts.push(data);
        });
      })
      .catch(error => {
        console.log(error);
      });

      axios
      .get("http://localhost:3001/api/childConnects", {
        params: { email: this.user.email }
      })
      .then(response => {
        console.log(response);
        response.data.forEach(item => {
          var data = {};
            data.childemail = item.c.properties.email;
            data.username = item.b.properties.username;
            data.email = item.b.properties.email;
          this.childConnections.push(data);
        });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("http://localhost:3001/api/getchildern", {
        params: { email: this.user.email }
      })
      .then(response => {
        console.log(response);
        this.children = response.data;
        // response.data.forEach(item => {
        //   var data = {};
        //   data = item.c.properties;
        //   this.children.push(data);
        // });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("http://localhost:3001/api/myconnections", {
        params: { sid: this.user.email }
      })
      .then(response => {
        console.log(response);
        // this.myconnections = response.data;
        response.data.forEach(item => {
          this.myconnections.push(item);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>



<style>
.cardprofile {
  margin: 20px 390px;
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

.postUsername {
  margin: 0 10px;
  text-transform: capitalize;
}

.bio {
  float: right;
  width: 75%;
}

.childcreate {
  right: 24px;
  position: absolute !important;
  bottom: 19px;
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

.cardsview {
  display: flex;
  flex-wrap: wrap;
}
</style>