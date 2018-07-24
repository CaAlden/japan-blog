<template>
  <div :class="containerClass">
    <img class="card-elm" :src="imgUrl(src)">
    <span class="card-caption"><slot></slot></span>
  </div>
</template>

<script>

const images = require.context('../')

export default {
  name: 'ImageCard',
  props: {
    layout: {
      default: '',
      type: String
    },
    src: {
      type: String
    }
  },
  computed: {
    containerClass () {
      return this.layout + ' image-card'
    }
  },
  methods: {
    imgUrl (path) {
      return images('./' + path)
    }
  }
}
</script>

<style>
.image-card {
    border: 1px solid var(--secondary-color);
    background: var(--bg-color);
    border-radius: 5px;
    padding: 0.25em;
    box-shadow: 2px 2px 5px grey;
    vertical-align: middle;
    display: block;
}

@media only screen and (min-width: 768px) {
  .image-card {
    transition: transform 0.5s ease-in-out 0.25s;
  }
  .image-card:hover, .image-card:active {
    transform: scale(1.5);
    z-index: 1000;
  }
}

.image-card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.card-elm {
  display: block;
  width: 100%;
}

.card-caption {
  font-family: var(--heading-font);
  font-size: 0.75em;
  font-style: italic;
  text-align: center;
}

</style>
