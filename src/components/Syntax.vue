<template>
  <div>
    <h3 class="text-center mb-4">
      <u>5. Vue template syntax</u>
    </h3>
    <div>
      <b-row>
        <b-col class="mb-4">
          <b-card>
            <h5 class="mt-0">Text</h5>
            <highlight-code>
              <pre>
            <code v-pre>&lt;span &gt;Message: {{ msg }}&lt;/span&gt;</code>
            </pre>
            </highlight-code>
            <highlight-code>
              <pre>
                <code v-pre>
                data() {
                    return {
                        msg: "Hello I am message"
                    }
                }
                </code>
              </pre>
            </highlight-code>
            <h5 class="mt-0">Output</h5>
            <highlight-code>
              <pre>
            <code>&lt;span &gt;Message: {{ msg }}&lt;/span&gt;</code>
            </pre>
            </highlight-code>
          </b-card>
        </b-col>
        <b-col class="mb-4">
          <b-card>
            <h5 class="mt-0">HTML</h5>
            <highlight-code>
              <pre>
                <code v-pre>
                mustaches &lt;span &gt;{{ rawHtml }}&lt;/span&gt;
                v-html directive &lt;span v-html="rawHtml"&gt;&lt;/span&gt;
                </code>
            </pre>
            </highlight-code>
            <highlight-code>
              <pre>
                <code v-pre>
                data() {
                    return {
                        rawHtml: "&lt;span style='color:red'&gt;I am rawHTML&lt;/span&gt;"
                    }
                }
                </code>
              </pre>
            </highlight-code>
            <h5 class="mt-0">Output</h5>
            <div class="hljs">
              mustaches
              <span>{{ rawHtml }}</span>
              <br />v-html directive
              <span v-html="rawHtml"></span>
            </div>
          </b-card>
        </b-col>
        <b-col class="mb-4">
          <b-card>
            <h5 class="mt-0">Attributes</h5>
            <highlight-code>
              <pre>
            <code v-pre>&lt;div v-bind:id="dynamicId"&gt;&lt;test/div&gt;</code>
            </pre>
            </highlight-code>
            <highlight-code>
              <pre>
                <code v-pre>
                data() {
                    return {
                        dynamicId: "dynamicId-11"
                    }
                }
                </code>
              </pre>
            </highlight-code>
            <h5 class="mt-0">Output</h5>
            <div class="hljs">
              <div v-bind:id="dynamicId">test</div>
            </div>
          </b-card>
        </b-col>
        <b-col class="mb-4">
          <b-card>
            <h5 class="mt-0">Using JavaScript Expressions</h5>
            <highlight-code>
              <pre>
            <code v-pre>{{ number + 1 }}</code>
            <code v-pre>{{ number % 2 == 0 ? 'odd':'even' }}</code>
            <code v-pre>{{ msg.split('').reverse().join('') }}</code>
            </pre>
            </highlight-code>
            <highlight-code>
              <pre>
                <code v-pre>
                data() {
                    return {
                        number: 10,
                        msg: "Hello I am message",
                    }
                }
                </code>
              </pre>
            </highlight-code>
            <h5 class="mt-0">Output</h5>
            <highlight-code>
              {{ number + 1 }}
              {{ number % 2 == 0 ? 'odd':'even' }}
              {{ msg.split('').reverse().join('') }}
            </highlight-code>
          </b-card>
        </b-col>
        <b-col class="mb-4">
          <b-card>
            <h5 class="mt-0">v-if v-else-if v-else</h5>
            <highlight-code>
              <pre>
                  &lt;input type="text" v-model="number"&gt;
                  &lt;span v-if="number > 0" :class="{'positive': number > 0 }"&gt;Positive&lt;/span&gt;
                  &lt;span v-else-if="number &lt; 0" :class="{'negative': number &lt; 0 }"&gt;Negative&lt;/span&gt;
                  &lt;span v-else :class="{'zero': number == 0 }"&gt;Zero&lt;/span&gt;
            </pre>
            </highlight-code>
            <highlight-code>
              <pre>
                <code v-pre>
                data(){
                    return{
                        number: 10
                    }
                }
                </code>
              </pre>
            </highlight-code>
            <h5 class="mt-0">Output</h5>
            <div class="hljs">
              <input type="text" v-model="number" />
              <span v-if="number > 0" :class="{'positive': number > 0 }">Positive</span>
              <span v-else-if="number < 0" :class="{'negative': number < 0 }">Negative</span>
              <span v-else :class="{'zero': number == 0 }">Zero</span>
            </div>
          </b-card>
        </b-col>
        <b-col class="mb-4">
          <b-card>
            <h5 class="mt-0">v-show</h5>
            <highlight-code>
              <pre>
                  &lt;input type="text" v-model="number"&gt;
                  &lt;span v-show="number > 0"&gt;Positive&lt;/span&gt;
                  &lt;span v-show="number &lt; 0"&gt;Negative&lt;/span&gt;
                  &lt;span v-show="number==0"&gt;Zero&lt;/span&gt;
            </pre>
            </highlight-code>
            <highlight-code>
              <pre>
                <code v-pre>
                data(){
                    return{
                        number: 10
                    }
                }
                </code>
              </pre>
            </highlight-code>
            <h5 class="mt-0">Output</h5>
            <div class="hljs">
              <input type="text" v-model="number" />
              <span v-show="number > 0">Positive</span>
              <span v-show="number < 0">Negative</span>
              <span v-show="number==0">Zero</span>
            </div>
          </b-card>
        </b-col>
        <b-col class="mb-4">
          <b-card>
            <h5 class="mt-0">v-for</h5>
            <highlight-code>
              <pre>
                <code v-pre>
                &lt;ul&gt;
                    &lt;li v-for="(item, key) in items" :key="key"&gt;
                        {{ item }}
                    &lt;/li&gt;
                &lt;/ul&gt;
                </code>
            </pre>
            </highlight-code>
            <highlight-code>
              <pre>
                <code v-pre>
                data(){
                    return{
                        items: [
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday"
                        ]
                    }
                }
                </code>
              </pre>
            </highlight-code>
            <h5 class="mt-0">Output</h5>
            <div class="hljs">
              <ul>
                <li v-for="(item, key) in items" :key="key">{{ item }}</li>
              </ul>
            </div>
          </b-card>
        </b-col>
        <b-col class="mb-4">
          <b-card>
            <h5 class="mt-0">Filters</h5>
            <highlight-code>
              <code v-pre>{{ msg | uppercase }}</code>
            </highlight-code>
            <highlight-code>
              <pre>
                <code v-pre>
                data(){
                    return{
                        msg: "Hello I am message",
                    }
                },
                filters: {
                    uppercase: function (value) {
                        return value.toUpperCase()
                    }
                }
                </code>
              </pre>
            </highlight-code>
            <h5 class="mt-0">Output</h5>
            <highlight-code>
              <code>{{ msg | uppercase }}</code>
            </highlight-code>
          </b-card>
          <b-card class="mt-4">
            <h5 class="mt-0">Built in events</h5>
            <highlight-code>
              <pre>
                  &lt;button v-on:click="alert('I am click event')"&gt;click me&lt;/button&gt;
            </pre>
            </highlight-code>
            <highlight-code>
              <pre>
                <code v-pre>
                methods: {
                    alertMe(txt){
                        alert(txt)
                    }
                }
                </code>
              </pre>
            </highlight-code>
            <h5 class="mt-0">Output</h5>
            <div class="hljs">
              <button v-on:click="alertMe('I am click event')">click me</button>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Hello I am message",
      rawHtml: "<i style='color:red'>I am rawHTML</i>",
      dynamicId: "dynamicId-11",
      number: 10,
      items: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]
    };
  },
  filters: {
    uppercase: function(value) {
      return value.toUpperCase();
    }
  },
  methods: {
    alertMe(txt) {
      alert(txt);
    }
  }
};
</script>
<style scoped>
.positive {
  color: green;
}
.negative {
  color: red;
}
.zero {
  color: blue;
}
</style>
