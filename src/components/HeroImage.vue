<template>
  <div class="hero-image">
      <span class="hero-text"><slot></slot></span>
      <img :src="imgUrl(src)">
  </div>
</template>

<script>

const images = require.context('../')

export default {
  name: 'HeroImage',
  props: ['src'],
  methods: {
    imgUrl (path) {
      return images('./' + path)
    },
  },
}
</script>

<style>
/* Hero Image Classes */
.hero-image {
  width: 100%;
  position:relative;
  display: inline-block;
  float: left;
  box-sizing: border-box;
}

.hero-image::after {
  content: "";
  clear: left;
  display: block;
}

.hero-image img {
  width: 100%;
  height: auto;
  display:block;
  z-index: -1;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--heading-font);
  color: white;
  font-size: 10vw;
  top: 50%;
  text-shadow: 5px 5px black;
}
</style>
