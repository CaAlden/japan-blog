<template>
  <div class="sidebar">
    <div class="sidebar-elm">
      <h2>Status</h2>
      <p>{{status}}</p>
    </div>
    <div class="sidebar-elm">
      <h2>Photo Gallery</h2>
      <a :href="photos">Photos!</a>
    </div>
    <div class="sidebar-elm">
      <h2>Recent Trips</h2>
      <ul>
        <li><a href="#">Kyoto</a></li>
        <li><a href="#">Mount Fuji</a></li>
        <li><a href="#">Toyko</a></li>
      </ul>
    </div>
    <div class="sidebar-elm">
      <h2>Upcoming Trips</h2>
      <ul>
        <li><a href="#">Hokkaido</a></li>
        <li><a href="#">Hiroshima</a></li>
        <li><a href="#">Osaka</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: ['photos', 'status'],
}
</script>

<style>

.sidebar {
  border: 1px solid var(--secondary-color);
  border-radius: 5px;
  padding: 0.25em;
  margin-right: 1em;
}

.sidebar h2 {
  font-family: 'Fjalla One', sans-serif;
  border-bottom: 0.15em solid var(--highlight-color);
}

.sidebar ul {
  padding: 0;
  margin: 0;
  list-style: circle inside url('/static/pin-small.png');
}

.sidebar-elm {
  padding: 0 1em;
  display: block;
  width: 100%;
}

.sidebar:last-child {
  padding-bottom: 1em;
}

@media only screen and (min-width: 768px) {
/* For Desktop view*/
  .sidebar {
    position: fixed;
  }
}
</style>
