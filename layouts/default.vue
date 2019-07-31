<template>
  <v-app>
    <div v-if="this.user">
      <v-btn @click="search()" absolute dark fab top right color="blue" class="searchIcon">
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn @click="logout()" absolute dark fab top right color="blue" class="logoutIcon">
        <v-icon>power_settings_new</v-icon>
      </v-btn>
      <v-btn @click="profile()" absolute dark fab top right color="blue" class="profileIcon">
        <v-icon>perm_identity</v-icon>
      </v-btn>
    </div>
    <div>
      <v-btn @click="logoClick()" absolute dark fab top left color="blue" class="logo">
        Connect Me
      </v-btn>
    </div>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>-->
    <!-- <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >-->
    <!-- <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
    </v-btn>-->
    <!-- <v-toolbar-title v-text="title" /> -->
    <!-- <v-spacer /> -->
    <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
    </v-btn>-->
    <!-- </v-toolbar> -->
    <v-content>
      <nuxt />
    </v-content>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>
              compare_arrows
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>-->
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "bubble_chart",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
      user: {}
    };
  },
  methods: {
    logoClick() {
      this.$router.push('/')
    },
    search() {
      this.$router.push('/search')
    },
    profile() {
      this.$router.push('/profile')
    },
    logout() {
      localStorage.removeItem('user')
      this.$router.push('/')
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
};
</script>

<style>
.searchIcon {
  margin: 45px 130px;
}

.logoutIcon {
  margin: 42px 0px;
}

.profileIcon {
    margin: 45px 65px;
}

.logo {
      width: 140px !important;
    border-radius: 50px !important;
    margin: 46px 0 !important;
}
</style>

