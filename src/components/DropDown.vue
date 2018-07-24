<template>
  <li class="dropdown">
    <button class="dropbtn">{{label}}</button>
    <div class="dropdown-content">
      <slot></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: 'DropDown',
  props: ['label'],
}
</script>

<style>
.dropbtn {
    font-family: var(--heading-font);
    background-color: var(--nav-bg);
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.dropbtn:focus {outline:0;}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--nav-bg-light);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: var(--nav-bg);
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-left: 5px solid var(--nav-bg-hover);
    z-index: 1000;
}

.dropdown-content:last-child {
    border-bottom: 5px solid var(--nav-bg-hover);
}

.dropdown-content a:hover {
    background-color: var(--nav-bg-hover);
    border-left: 5px solid var(--highlight-bold-color);
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: var(--nav-bg-hover);
}
</style>
