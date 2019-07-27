<template>
  <div>
    <h3 class="text-center mb-4">
      <u>3. Installation</u>
    </h3>
    <div>
      <p>Vue does not support IE8 and below, because it uses ECMAScript 5 features that are un-shimmable in IE8. However it supports all ECMAScript 5 compliant browsers.</p>
      <p>For prototyping or learning purposes, you can use the latest version with:</p>
      <highlight-code>
        <pre>
          <code>
              &lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;
          </code>
      </pre>
      </highlight-code>
      <p>For production, its recommended to use a specific version number and build to avoid unexpected breakage from newer versions:</p>
      <highlight-code>
        <pre>
          <code>
              &lt;script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"&gt;&lt;/script&gt;
          </code>
      </pre>
      </highlight-code>
      <p>If you are using native ES Modules, there is also an ES Modules compatible build:</p>
      <highlight-code>
        <pre>
          <code>
              &lt;script type="module"&gt;
                import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js'
              &lt;/script&gt;
          </code>
      </pre>
      </highlight-code>
      <b-alert show variant="warning">
        Warning regarding Previous Versions
        <br />The package name changed from vue-cli to @vue/cli. If you have the previous vue-cli (1.x or 2.x) package installed globally, you need to uninstall it first with npm uninstall vue-cli -g or yarn global remove vue-cli.
      </b-alert>
      <b-alert
        show
        variant="info"
      >Vue CLI requires Node.js version 8.9 or above (8.11.0+ recommended).</b-alert>
      <highlight-code>
        <pre>
              <code>
                  npm install -g @vue/cli //If not already done before
              </code>
              <code>
                  vue ui // to create project using vue GUI
              </code>
              <code>
                  vue create . // for same directory
                  vue create  &lt;project name &gt;
              </code>
          </pre>
      </highlight-code>
    </div>
    <h3 class="text-center">Vue Instance creation</h3>
    <p>Every Vue application starts by creating a new Vue instance with the Vue function:</p>
    <highlight-code>
      <pre>
            <code>
            var vm = new Vue({
                // options
            })
            </code>
        </pre>
    </highlight-code>
  </div>
</template>
