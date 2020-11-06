<template>
  <div class="card w-100">
    <img :src="article.image_url" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ article.title }}</h5>
      <p class="card-text">
        {{ article.text }}
      </p>
      <router-link :to="{ name: 'article.show', params: { id: article.id } }">
        View
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object
    }
  }
};
</script>

