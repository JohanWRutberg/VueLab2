<template>
  <div class="col">
    <div class="card" style="width: 18rem">
      <img
        src="../assets/img/falaq-lazuardi-EY7D79nsPiY-unsplash.jpg"
        class="card-img-top"
        alt="Bild"
      />
      <div class="card-body">
        <h5 class="card-title">{{ offer.name }}</h5>
        <p class="card-text">
          {{ offer.including }}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    offer: {
      required: true,
      type: Object,
    },
  },
};
</script>
<style></style>
