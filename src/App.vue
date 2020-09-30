<template>
  <div id="app">
    <b-container class="mt-3">
      <b-row>
        <b-col cols="2">
          <b-link :to="{ name: 'Init' }">
            <img src="@/assets/logo.png" class="logo" />
          </b-link>
        </b-col>
        <b-col>
          <h1>Vue.js - The Progressive JavaScript Framework</h1>
        </b-col>
      </b-row>
      <hr class="my-4" />
      <div class="content">
        <router-view />
      </div>
      <footer class="footer">
        <b-button v-if="$route.name != 'Init'" @click="$router.back()"
          >Back</b-button
        >
        <span class="float-right" v-if="$route.name == 'Init'"
          >- By Rakesh Sojitra</span
        >
        <b-button
          variant="primary"
          class="float-right"
          v-if="$route.name == 'Topics'"
          :to="{ name: 'Intro' }"
          >Next</b-button
        >
        <b-button
          variant="primary"
          class="float-right"
          v-else-if="$route.name == 'Intro'"
          :to="{ name: 'Comparison' }"
          >Next</b-button
        >
        <b-button
          variant="primary"
          class="float-right"
          v-else-if="$route.name == 'Comparison'"
          :to="{ name: 'Installation' }"
          >Next</b-button
        >
        <b-button
          variant="primary"
          class="float-right"
          v-else-if="$route.name == 'Installation'"
          :to="{ name: 'LifeCycle' }"
          >Next</b-button
        >
        <b-button
          variant="primary"
          class="float-right"
          v-else-if="$route.name == 'LifeCycle'"
          :to="{ name: 'Syntax' }"
          >Next</b-button
        >
        <b-button
          variant="primary"
          class="float-right"
          v-else-if="$route.name == 'Syntax'"
          :to="{ name: 'Form' }"
          >Next</b-button
        >
        <b-button
          variant="primary"
          class="float-right"
          v-else-if="$route.name == 'Form'"
          :to="{ name: 'VueRouter' }"
          >Next</b-button
        >
        <b-button
          variant="primary"
          class="float-right"
          v-else-if="$route.name == 'VueRouter'"
          :to="{ name: 'Thanks' }"
          >Next</b-button
        >
      </footer>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
.logo {
  width: 70px;
}
.content {
  min-height: 400px;
}
.footer {
  padding: 20px;
}
</style>
