<template>
  <div>
    <h3 class="text-center mb-4">
      <u>6. Form binding</u>
    </h3>
    <div>
      <b-row>
        <b-col>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
              <b-form-input id="input-2" v-model="form.name" placeholder="Enter name"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Food:" label-for="input-3">
              <b-form-select id="input-3" v-model="form.food" :options="foods"></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4">
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox value="me">Check me out</b-form-checkbox>
                <b-form-checkbox value="that">Check that out</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>

            <b-form-group label="Individual radios">
              <b-form-radio v-model="form.selected" name="some-radios" value="A">Option A</b-form-radio>
              <b-form-radio v-model="form.selected" name="some-radios" value="B">Option B</b-form-radio>
            </b-form-group>

            <b-form-textarea
              id="textarea"
              v-model="form.text"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>

            <b-form-file
              ref="file-input"
              class="mt-4"
              v-model="file"
              :state="Boolean(file)"
              placeholder="Choose a file..."
              drop-placeholder="Drop file here..."
            ></b-form-file>

            <div class="my-4">
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </div>
          </b-form>
        </b-col>
        <b-col>
          <b-card class="mt-3" header="Form Data Result">
            <highlight-code>
              <pre class="m-0">{{ form }}</pre>
              <pre class="m-0">{{ file }}</pre>
            </highlight-code>
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
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
        selected: null,
        text: null
      },
      file: null,
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      this.form.selected = null;
      this.form.text = null;
      this.$refs['file-input'].reset()
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
