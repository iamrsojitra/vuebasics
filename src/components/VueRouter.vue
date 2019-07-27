<template>
  <div>
    <h3 class="text-center mb-4">
      <u>7. Vue router</u>
    </h3>
    <div>
      <p>Add vue router using CDN:</p>
      <highlight-code>
        <pre>
          <code>
              &lt;script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.js"&gt;&lt;/script&gt;
          </code>
      </pre>
      </highlight-code>
      <p>Add vue router using cli:</p>
      <highlight-code>
        npm install vue-router
      </highlight-code>
      <p>Use router in your project</p>
      <highlight-code>
        import Vue from 'vue'
        import VueRouter from 'vue-router'

        Vue.use(VueRouter)

        const routes = [
            { path: '/foo', component: Foo },
            { path: '/bar', component: Bar }
        ]

        const router = new VueRouter({
            routes : routes // Array of routes
        })

        const app = new Vue({
            router
        }).$mount('#app')
      </highlight-code>
    </div>
  </div>
</template>
