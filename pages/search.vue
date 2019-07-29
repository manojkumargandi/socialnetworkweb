<template>
  <div>
    <v-text-field class="serachbar" append-icon="search" label="Solo" placeholder="Search" v-model="search" @keyup.enter="searchuser()" solo></v-text-field>
    <div class="profilecardsDiv">
      <div v-for="user in users" :key="user.uuid" class="profilecards">
        <v-card class="childrequestCard">
          <div class="friendRequest">
            <v-avatar class="profile" :size="$vuetify.breakpoint.smAndUp ? 164 : 128" tile>
              <img src="../assets/user.png" />
            </v-avatar>
            <div class="username">{{user.username}}</div>
            <div>
              <v-btn>Connect</v-btn>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
      allUsers: [],
      search: ""
    };
  },
  methods:{
    searchuser: function() {
      console.log(this.search)
      var params = this.search;
      if(this.search != "") {
        this.allUsers = this.users
        var heros =  this.users.filter(function(user) {
          return user.username == params;
        });

        this.users = heros
      } else {
        this.users = this.allUsers
      }
    }
  },
  mounted() {
    var data = [];
    axios
      .get("http://localhost:3001/api/users")
      .then(response => {
        console.log(response.data);
        data = response.data;
        this.users = data;
      })
      .catch(error => {
        console.log(error);
      });
    console.log(this.users);
  }
};
</script>

<style>
.serachbar {
  width: 800px !important;
  padding: 50px !important;
  margin: auto !important;
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

.profilecards {
  margin: 0 50px;
}

.profilecardsDiv {
  display: flex;
  flex-wrap: wrap;
  margin: 0 195px;
}

.username {
  font-size: 22px;
  text-transform: capitalize;
}
</style>
