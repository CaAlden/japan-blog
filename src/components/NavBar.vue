<template>
  <div class="nav fixed">
    <ul class="spread-out">
      <li>
        <router-link
          :to="{path: '/'}">
          Home
        </router-link>
      </li>
      <li v-for='blog in blogs'
          :key='blog.link'
          class='hidable'>
        <router-link
          :to='blog.link'>
          {{blog.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['blogs'],
}
</script>

<style>
.nav {
  width: 100%;
  z-index: 1000;
  background: var(--nav-bg);
}
.nav ul {
    display: flex;
    justify-content: flex-start;
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: var(--nav-bg);
}

@media all and (min-width: 768px) {
  .fixed {
    position: fixed;
  }
}

@media all and (max-width: 768px) {
  .spread-out {
    flex-direction: column;
  }
}

.nav li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-family: var(--header-font);
}

/* Change the link color to #111 (black) on hover */
.nav li a:hover {
    background-color: var(--nav-bg-hover);
}
</style>
