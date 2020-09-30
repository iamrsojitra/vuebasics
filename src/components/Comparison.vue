<template>
  <div>
    <h3 class="text-center mb-4">
      <u>2. Comparison with Angular and React</u>
    </h3>
    <div>
      <b-table striped hover :items="items" :fields="fields">
        <template v-slot:cell(angular)="data">
          <span v-html="data.value"></span>
        </template>
        <template v-slot:cell(react)="data">
          <span v-html="data.value"></span>
        </template>
        <template v-slot:cell(vue)="data">
          <span v-html="data.value"></span>
        </template>
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
          angular: "10.1.3",
          react: "16.13.1",
          vue: "3.0"
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
            "Watchers: 3.2K<br/>Stars: 66.4K<br/>Fork: 17.6K<br/>Contributors: 1226",
          react:
            "Watchers: 6.7K<br/>Stars: 157K<br/>Fork: 30.9K<br/>Contributors: 1507",
          vue:
            "Watchers: 6.3K<br/>Stars: 173K<br/>Fork: 26.7K<br/>Contributors: 378"
        },
        { "#": "Coding speed", angular: "Slow", react: "Mediam", vue: "Fast" },
        {
          "#": "Weekly Downloads",
          angular: "563.1K",
          react: "8,344.3 K",
          vue: "1,940.3K"
        }
      ]
    };
  }
};
</script>
