<template>
  <div class="nav">
    <ul>
      <li>
        <router-link
          :to="{path: '/'}">
          Home
        </router-link>
      </li>
      <li
        v-for='blog in blogs'
        :key='blog.link'>
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
  props: ['blogs']
}
</script>

<style>
.nav {
  width: 100%;
  position: fixed;
  z-index: 1000;
}
.nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

.nav li {
    float: left;
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
    background-color: #111;
}
</style>
