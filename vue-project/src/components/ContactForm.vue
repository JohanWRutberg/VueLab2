<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      msg: [],
      isSubmitted: false,
      headline: "Send us a message!",
      word: "",
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

    greet(event) {
      // `this` inside methods points to the current active instance
      alert(`Hello ${this.name}!`);
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    },

    getInput() {
      this.isSubmitted = true;
    },
  },

  computed: {
    currentLength() {
      return this.message.length;
    },
    isBad() {
      return this.currentLength > 30;
    },
  },
};
</script>

<template>
  <div class="container">
    <form>
      <div class="segment">
        <h1>{{ headline }}</h1>
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
          v-model="message"
          maxlength="40"
          placeholder="Message"
        />
        <div style="margin-left: 20px">
          Max 40 char. (You have entered:
          <span class="count" :class="{ bad: isBad }">
            {{ currentLength }}
          </span>
          characters).

          <p>Name: {{ name }}</p>
          <p>E-mail: {{ email }}</p>
          <p>Message: {{ message }}</p>
        </div>
      </div>
      <button @click="getInput" class="red" type="button">
        <i class="icon"></i> Submit
      </button>
      <p></p>
      <div v-if="isSubmitted" style="margin-left: 20px">
        Submitted values:
        <p>{{ name }}</p>
        <p>{{ email }}</p>
        <p>{{ message }}</p>
      </div>

      <div class="segment">
        <button @click="greet" class="unit" type="button">
          <i class="icon">1</i>
        </button>
        <button @click="greet" class="unit" type="button">
          <i class="icon">2</i>
        </button>
        <button @click="greet" class="unit" type="button">
          <i class="icon">3</i>
        </button>
        <button @click="greet" class="unit" type="button">
          <i class="icon">4</i>
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
  font-weight: bold;
}
.container {
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  margin-left: 10px;
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
  font-size: 14px;
}

div,
p {
  color: #b4b5b9;
  text-shadow: 1px 1px 1px #fff;
}

form {
  padding: 16px;
  width: 450px;
  margin: 0 auto;
  margin-top: 0px;
}

.segment {
  padding: 32px 0;
  text-align: center;
}

button {
  color: #696969;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 0;
  outline: 0;
  border-radius: 320px;
  padding: 16px;
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 #fff;
}

input {
  color: #696969;
  font-size: 0.7rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 0;
  outline: 0;
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
  font-weight: normal;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 400;
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
