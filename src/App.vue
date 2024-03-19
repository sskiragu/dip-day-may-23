<script setup>

</script>

<template>
  <v-app>
    <v-toolbar color="green">
      <v-tab to="/">Home</v-tab>
      <v-tab to="/about">About</v-tab>
      <v-tab to="">Services</v-tab>
      <v-tab to="">Contacts</v-tab>
      <v-tab to="">Login</v-tab>
      <v-tab to="/signup">Signup</v-tab>
    </v-toolbar>
    <router-view/>
  </v-app>
</template>

<style scoped></style>