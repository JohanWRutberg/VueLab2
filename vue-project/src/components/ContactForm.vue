<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      description: "",
      msg: [],
    };
  },
  watch: {
    email(value) {
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    },
  },
  methods: {
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Enter a valid Email Address";
      }
    },
  },
  computed: {
    currentLength() {
      return this.description.length;
    },
    isBad() {
      return this.currentLength > 40;
    },
  },
};
</script>

<template>
  <div class="centered">
    <form>
      <div class="segment">
        <h1>Send us a message!</h1>
      </div>

      <label>
        <input type="text" v-model="name" placeholder="Name" />
      </label>
      <label for="email">
        <input
          type="text"
          v-model="email"
          minlength="5"
          required
          placeholder="E-mail"
        />
        <p v-if="msg.email">{{ msg.email }}</p>
      </label>

      <div id="app" v-cloak>
        <input
          type="text"
          v-model="description"
          maxlength="50"
          placeholder="Message"
        />Enter a maximum of 50 characters please:
        <span class="count" :class="{ bad: isBad }">
          {{ currentLength }} characters
        </span>
      </div>
      <p></p>
      <p>Name: {{ name }}</p>
      <p>E-mail: {{ email }}</p>
      <p>Message: {{ description }}</p>
      <button @click="" class="red" type="button">
        <i class="icon ion-md-lock"></i> Submit
      </button>

      <div class="segment">
        <button class="unit" type="button">
          <i class="icon ion-md-arrow-back"></i>
        </button>
        <button class="unit" type="button">
          <i class="icon ion-md-bookmark"></i>
        </button>
        <button class="unit" type="button">
          <i class="icon ion-md-settings"></i>
        </button>
        <button class="unit" type="button">
          <i class="icon ion-md-search"></i>
        </button>
      </div>
    </form>
  </div>
</template>
<style scoped>
[v-cloak] {
  display: none;
}

.count {
  font-style: italic;
}

.bad {
  color: red;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
}
body,
html {
  background-color: #ebecf0;
}

body,
p,
input,
select,
textarea,
button {
  font-family: "Montserrat", sans-serif;
  letter-spacing: -0.2px;
  font-size: 16px;
}

div,
p {
  color: #babecc;
  text-shadow: 1px 1px 1px #fff;
}

form {
  padding: 16px;
  width: 520px;
  margin: 0 auto;
  margin-top: 200px;
}

.segment {
  padding: 32px 0;
  text-align: center;
}

button,
input {
  border: 0;
  outline: 0;
  font-size: 16px;
  border-radius: 320px;
  padding: 16px;
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 #fff;
}

label {
  display: block;
  margin-bottom: 24px;
  width: 100%;
}

input {
  margin-right: 8px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;
}

input:focus {
  box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
}

button {
  color: #61677c;
  font-weight: bold;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;
}
button:hover {
  box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
}
button:active {
  box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
}
button .icon {
  margin-right: 8px;
}
button.unit {
  border-radius: 8px;
  line-height: 0;
  width: 48px;
  height: 48px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 8px 8px 8px 8px;
  font-size: 19.2px;
}
button.unit .icon {
  margin-right: 0;
}
button.red {
  display: block;
  width: 100%;
  color: #363433;
}

.input-group {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.input-group label {
  margin: 0;
  flex: 1;
}
</style>
