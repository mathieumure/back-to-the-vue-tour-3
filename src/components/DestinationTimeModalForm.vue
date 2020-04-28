<template>
  <div class="destination-time-modal">
    <form class="destination-time-modal-form" @submit="handleSubmit">
      <label>
        Date / Time
        <input type="text" :value="formattedDate" @input="handleChange" />
      </label>
      <button>Let's Go</button>
    </form>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "destination-time-modal-form",
  props: {
    date: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedDate() {
      return this.date.format("YYYY-MM-DD HH:mm");
    }
  },
  methods: {
    handleChange($event) {
      if (/^\d\d\d\d-\d\d-\d\d \d\d:\d\d$/.test($event.target.value)) {
        this.$emit("update:date", moment($event.target.value));
      }
    },
    handleSubmit($event) {
      $event.preventDefault();
      this.$emit("submit");
    }
  }
};
</script>

<style scoped>
.destination-time-modal {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
}

.destination-time-modal-form {
  padding: 50px;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
}

.destination-time-modal-form input {
  padding: 5px 20px;
  margin-left: 30px;
  font-size: 1.1rem;
}

.destination-time-modal-form button {
  padding: 5px 20px;
  margin-top: 30px;
  font-size: 1.1rem;
}
.destination-time-modal-form button:hover {
  cursor: pointer;
}
</style>
