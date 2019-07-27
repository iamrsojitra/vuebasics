<template>
  <div>
    <h3 class="text-center mb-4">
      <u>4. Vue instance lifecycle</u>
    </h3>
    <div>
      <b-row>
        <b-col>
          <img src="@/assets/lifecycle.png" alt="lifecycle.png" style="width:100%;" />
        </b-col>
        <b-col>
          <highlight-code>
            <pre>
                  <code>
                        &lt;template&gt;
                          &lt;b-form-checkbox v-model="tempSwitch" name="check-button" switch&gt;
                            Switch Checkbox
                            &lt;b&gt;(Checked: {{ tempSwitch }})&lt;/b&gt;
                          &lt;/b-form-checkbox&gt;
                        &lt;/template&gt;
                        &lt;script&gt;
                            export default {
                              data() {
                                return {
                                  tempSwitch: false
                                };
                              },
                              beforeCreate() {
                                console.log(
                                  "I am beforecreated!", this.tempSwitch,
                                  document.getElementById("lifecycleoutput")
                                );
                              },
                              created() {
                                console.log(
                                  "I am created!", this.tempSwitch,
                                  document.getElementById("lifecycleoutput")
                                );
                              },
                              beforeMount() {
                                console.log(
                                  "right before the mount happens", this.tempSwitch,
                                  document.getElementById("lifecycleoutput")
                                );
                              },
                              mounted() {
                                console.log(
                                  "I am now mounted!", this.tempSwitch,
                                  document.getElementById("lifecycleoutput")
                                );
                              },
                              beforeUpdate() {
                                console.log(
                                  "before the component is updated", this.tempSwitch,
                                  document.getElementById("lifecycleoutput")
                                );
                              },
                              updated() {
                                console.log(
                                  "the component is updated.", this.tempSwitch,
                                  document.getElementById("lifecycleoutput")
                                );
                              },
                              beforeDestroy() {
                                console.log(
                                  "before the component is destroyed", this.tempSwitch,
                                  document.getElementById("lifecycleoutput")
                                );
                              },
                              destroyed() {
                                console.log(
                                  "the components gone.", this.tempSwitch,
                                  document.getElementById("lifecycleoutput")
                                );
                              }
                        &lt;/script&gt;
                  </code>
              </pre>
          </highlight-code>
          <b-form-checkbox v-model="tempSwitch" name="check-button" switch>
            Switch Checkbox
            <b>(Checked: {{ tempSwitch }})</b><div id="lifecycleoutput">Hii</div>
          </b-form-checkbox>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tempSwitch: false
    };
  },
  beforeCreate() {
    console.log(
      "I am beforecreated!", this.tempSwitch,
      document.getElementById("lifecycleoutput")
    );
  },
  created() {
    console.log("I am created!", this.tempSwitch, document.getElementById("lifecycleoutput"));
  },
  beforeMount() {
    console.log(
      "right before the mount happens", this.tempSwitch,
      document.getElementById("lifecycleoutput")
    );
  },
  mounted() {
    console.log(
      "I am now mounted!", this.tempSwitch,
      document.getElementById("lifecycleoutput")
    );
  },
  beforeUpdate() {
    console.log(
      "before the component is updated", this.tempSwitch,
      document.getElementById("lifecycleoutput")
    );
  },
  updated() {
    console.log(
      "the component is updated.", this.tempSwitch,
      document.getElementById("lifecycleoutput")
    );
  },
  beforeDestroy() {
    console.log(
      "before the component is destroyed", this.tempSwitch,
      document.getElementById("lifecycleoutput")
    );
  },
  destroyed() {
    console.log(
      "the components gone.", this.tempSwitch,
      document.getElementById("lifecycleoutput")
    );
  }
};
</script>