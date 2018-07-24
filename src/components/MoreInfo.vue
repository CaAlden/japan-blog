<template>
  <span class="more-info">
    {{keyword}}
    <span class="more-info-text">
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: 'MoreInfo',
  props: ['keyword'],
}
</script>

<style>
.more-info {
    font-weight: bold;
    font-style: italic;
    position: relative;
    display: inline-block;
    color: var(--highlight-bold-color);
}

.more-info .more-info-text {
    font-weight: normal;
    font-style: normal;
    visibility: hidden;
    width: 400px;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    text-align: center;
    border-radius: 6px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -200px;
}

.more-info .more-info-text::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
}

.more-info:hover .more-info-text {
    visibility: visible;
}

.more-info:active .more-info-text {
    visibility: visible;
}
</style>
