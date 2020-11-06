<template>
  <div class="home">
    <BannerSlider />
    <Container>
      <Content
        title="Article"
        moreText="ดูเพิ่มเติม"
        :moreLink="{ name: 'home' }"
      >
        <ArticlePage />
      </Content>
    </Container>
  </div>
</template>

<script>
import BannerSlider from '@/components/home/BannerSlider.vue';
import Content from '@/components/Content.vue';
import ArticlePage from '@/components/article/ArticlePage.vue';

export default {
  name: 'Home',
  components: {
    BannerSlider,
    Content,
    ArticlePage
  }
};
</script>
