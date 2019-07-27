<template>
  <div>
    <h3 class="text-center mb-4">
      <u>2. Comparison with Angular and React</u>
    </h3>
    <div>
      <b-table striped hover :items="items" :fields="fields">
        <span slot="angular" slot-scope="data" v-html="data.value"></span>
        <span slot="react" slot-scope="data" v-html="data.value"></span>
        <span slot="vue" slot-scope="data" v-html="data.value"></span>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["#", "angular", "react", "vue"],
      items: [
        { "#": "Initial release", angular: "2010", react: "2013", vue: "2014" },
        {
          "#": "Official site",
          angular:
            "<a href='https://angular.io' target='_blank'>angular.io</a>",
          react:
            "<a href='https://reactjs.org' target='_blank'>reactjs.org</a>",
          vue: "<a href='https://vuejs.org' target='_blank'>vuejs.org</a>"
        },
        { "#": "Publisher", angular: "Google", react: "Facebook", vue: "-" },
        { "#": "Approx. size (KB)", angular: "500", react: "100", vue: "80" },
        {
          "#": "Current version",
          angular: "8.0.0",
          react: "16.8.6",
          vue: "2.6.10"
        },
        {
          "#": "Used by",
          angular: "Google, Wix",
          react: "Facebook, Uber",
          vue: "Alibaba, GitLab"
        },
        {
          "#": "Github",
          angular:
            "Watchers: 3.2K<br/>Stars: 49.7K<br/>Fork: 13.6K<br/>Contributors: 966",
          react:
            "Watchers: 6.6K<br/>Stars: 132.9K<br/>Fork: 24.6K<br/>Contributors: 1304",
          vue:
            "Watchers: 5.9K<br/>Stars: 144.1K<br/>Fork: 20.9K<br/>Contributors: 277"
        },
        { "#": "Coding speed", angular: "Slow", react: "Mediam", vue: "Fast" },
        {
          "#": "Weekly Downloads",
          angular: "464.3K",
          react: "5,058.6K",
          vue: "1,004.8K"
        }
      ]
    };
  }
};
</script>
