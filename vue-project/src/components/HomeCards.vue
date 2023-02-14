<script>
export default {
  data() {
    return {
      headline: "Picsum Quotes",
    };
  },

  methods: {
    linkToOtherWindow(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
<template>
  <div class="container">
    <div>
      <h1>{{ headline }}</h1>
    </div>
  </div>

  <div class="centered">
    <ul class="cards">
      <li class="cards__item">
        <div class="card">
          <div class="card__image card__image--1"></div>
          <div class="card__content">
            <div class="card__title">First Quote(s)</div>
            <p class="card__text">
              “Java is to JavaScript what car is to Carpet.” – “First, solve the
              problem. Then, write the code.”
            </p>
            <button
              @click="
                linkToOtherWindow('https://picsum.photos/id/244/1545/1024')
              "
              class="red"
              type="button"
            >
              <i class="icon ion-md-lock"></i> Get Image
            </button>
          </div>
        </div>
      </li>
      <li class="cards__item">
        <div class="card">
          <div class="card__image card__image--2"></div>
          <div class="card__content">
            <div class="card__title">Second Quote(s)</div>
            <p class="card__text">
              “Experience is the name everyone gives to their mistakes.” – “ In
              order to be irreplaceable, one must always be different.”
            </p>
            <button
              @click="
                linkToOtherWindow('https://picsum.photos/id/281/1545/1024')
              "
              class="red"
              type="button"
            >
              <i class="icon ion-md-lock"></i> Get Image
            </button>
          </div>
        </div>
      </li>
      <li class="cards__item">
        <div class="card">
          <div class="card__image card__image--3"></div>
          <div class="card__content">
            <div class="card__title">Third Quote(s)</div>
            <p class="card__text">
              “Sometimes it pays to stay in bed on Monday, rather than spending
              the rest of the week debugging Monday’s code.”
            </p>
            <button
              @click="
                linkToOtherWindow('https://picsum.photos/id/372/1545/1024')
              "
              class="red"
              type="button"
            >
              <i class="icon ion-md-lock"></i> Get Image
            </button>
          </div>
        </div>
      </li>
      <li class="cards__item">
        <div class="card">
          <div class="card__image card__image--4"></div>
          <div class="card__content">
            <div class="card__title">Fourth Quote(s)</div>
            <p class="card__text">
              “Code is like humor. When you have to explain it, it’s bad.” –
              “Before software can be reusable it first has to be usable.”
            </p>
            <button
              @click="
                linkToOtherWindow('https://picsum.photos/id/317/1545/1024')
              "
              class="red"
              type="button"
            >
              <i class="icon ion-md-lock"></i> Get Image
            </button>
          </div>
        </div>
      </li>
      <li class="cards__item">
        <div class="card">
          <div class="card__image card__image--5"></div>
          <div class="card__content">
            <div class="card__title">Fifth Quote(s)</div>
            <p class="card__text">
              “When to use iterative development? You should use iterative
              development only on projects that you want to succeed.”
            </p>
            <button
              @click="
                linkToOtherWindow('https://picsum.photos/id/436/1545/1024')
              "
              class="red"
              type="button"
            >
              <i class="icon ion-md-lock"></i> Get Image
            </button>
          </div>
        </div>
      </li>
      <li class="cards__item">
        <div class="card">
          <div class="card__image card__image--6"></div>
          <div class="card__content">
            <div class="card__title">Sixth Quote(s)</div>
            <p class="card__text">
              “Make it work, make it right, make it fast.” – “Fix the cause, not
              the symptom.”
            </p>
            <button
              @click="
                linkToOtherWindow('https://picsum.photos/id/451/1545/1024')
              "
              class="red"
              type="button"
            >
              <i class="icon ion-md-lock"></i> Get Image
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.container {
  position: sticky;
  display: flex;
  justify-content: center;
  margin-top: 15vh;
}
.container,
h1 {
  font-size: 60px;
}

#wrapper-hero img {
  margin: 0 auto;
  height: auto;
  overflow-x: hidden;
}

.centered {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30vh;
}
.count {
  font-style: italic;
}

.bad {
  color: red;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  background-color: ebecf0;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}
.cards {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
}
.cards__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem;
}
@media (min-width: 40rem) {
  .cards__item {
    width: 50%;
  }
}
@media (min-width: 56rem) {
  .cards__item {
    width: 33.3333%;
  }
}
.card {
  background-color: #ebecf0;
  border: 1px solid #bfbfbf;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.38);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: hidden;
}
.card:hover .card__image {
  -webkit-filter: contrast(100%);
  filter: contrast(100%);
}
.card__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 1rem;
}
.card__image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  -webkit-filter: contrast(70%);
  filter: contrast(65%);
  overflow: hidden;
  position: relative;
  -webkit-transition: -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  transition: -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91),
    -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
}
.card__image::before {
  content: "";
  display: block;
  padding-top: 56.25%;
}
@media (min-width: 40rem) {
  .card__image::before {
    padding-top: 66.6%;
  }
}
.card__image--1 {
  background-image: url(https://unsplash.it/800/600?image=244);
}
.card__image--2 {
  background-image: url(https://unsplash.it/800/600?image=281);
}
.card__image--3 {
  background-image: url(https://unsplash.it/800/600?image=372);
}
.card__image--4 {
  background-image: url(https://unsplash.it/800/600?image=317);
}
.card__image--5 {
  background-image: url(https://unsplash.it/800/600?image=436);
}
.card__image--6 {
  background-image: url(https://unsplash.it/800/600?image=451);
}
.card__title {
  color: #696969;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.card__text {
  color: #a5a5a5;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
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
