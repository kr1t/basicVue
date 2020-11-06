<template>
  <div class="my-4">
    <div class="clearfix ">
      <div class="float-left">{{ title }}</div>
      <div class="float-right" v-if="moreLink">
        <router-link :to="moreLink">
          {{ moreText }}
        </router-link>
      </div>
    </div>
    <hr />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    moreText: {
      type: String,
      default: 'ดูเพิ่มเติม'
    },
    moreLink: { default: false }
  }
};
</script>
