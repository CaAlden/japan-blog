<template>
  <div class="blog-post">
    <HeroImage :src="cover">
      {{title}}
    </HeroImage>
    <div class="col-12 header">
      <h4> {{ date  }} </h4>
    </div>
    <div class="col-2"></div>
    <div class="col-8">
      <slot></slot>
    </div>
    <div class="col-2"></div>
    <footer></footer>
  </div>
</template>

<script>
import HeroImage from './HeroImage.vue'
export default {
  name: 'BlogPostBase',
  props: ['title', 'cover', 'date'],
  components: { HeroImage }
}
</script>

<style>
.header {
  padding: 1em 2em;
  border-bottom: 4px solid #ffffff;
}
.header * {
  font-family: var(--heading-font);
  text-align: center;
}

.header h1 {
  font-size: 4em;
}

.blog-post {
  color: var(--primary-color);
}
.blog-post p {
  font-family: var(--body-font);
  font-size: 1.1em;
  word-break: break-none;
}
.blog-post p::before {
  content: "";
  padding: 10px;
}

.blog-post h2 {
  font-family: var(--heading-font);
  font-size: 2em;
  border-bottom: solid 0.25em var(--highlight-color);
}

.blog-post footer {
  padding: 1em 0em;
}
.blog-post footer::before {
  content: "";
  clear: both;
  display: block;
}
</style>
