<template>
  <div>
    <b-media>
      <img slot="aside" src="@/assets/evan-you.jpg" alt="Media Aside" />

      <h2 class="mb-3">Evan You - Author of Vue.js</h2>
      <p><b>Initial release</b>	February 2014; 5 years ago</p>
      <p><b>Stable release</b> 2.6.10 / March 20, 2019; 3 months ago</p>
      <p><b>Repository</b>	<a href="https://github.com/vuejs/vue" target="_blank">https://github.com/vuejs/vue</a></p>
      <p><b>Written in</b>	JavaScript</p>
      <p><b>Size</b>	30.67 KB production, 279 KB development</p>
      <p><b>Type</b>	JavaScript framework</p>
      <p><b>License</b>	MIT License</p>
      <p><b>Website</b>	<a href="https://vuejs.org" target="_blank">https://vuejs.org</a></p>
      <p><b-button variant="primary" :to="{'name': 'Topics'}">Let's learn</b-button></p>
    </b-media>
  </div>
</template>
<style scoped>
</style>
