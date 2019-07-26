<template>
  <div class="homediv">
    <div class="postdiv">
      <v-textarea solo name="input-7-4" label="Whats on your mind??"></v-textarea>
      <v-btn class="postbtn">POST</v-btn>
    </div>

    <v-timeline>
      <v-timeline-item small fill-dot>
        <v-card max-width="344" class="mx-auto">
          <v-card-title>
            <v-avatar color="indigo" size="25">
              <!-- <span class="white--text headline">36</span> -->
            </v-avatar>
            <span class="username">Username</span>
          </v-card-title>
          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn text>Click</v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
      <v-timeline-item small fill-dot>
        <v-card max-width="344" class="mx-auto">
          <v-card-title>
            <v-avatar color="indigo" size="25">
              <!-- <span class="white--text headline">36</span> -->
            </v-avatar>
            <span class="username">Username</span>
          </v-card-title>
          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn text>Click</v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
      <v-timeline-item small fill-dot>
        <v-card max-width="344" class="mx-auto">
          <v-card-title>
            <v-avatar color="indigo" size="25">
              <!-- <span class="white--text headline">36</span> -->
            </v-avatar>
            <span class="username">Username</span>
          </v-card-title>
          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn text>Click</v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {};
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