<template>
  <div class="row">
    <div
      class="col-md-4 my-2"
      v-for="(article, index) in articles"
      :key="index"
    >
      <Card :article="article" />
    </div>
  </div>
</template>

<script>
const loremPicsum = id => {
  return `https://picsum.photos/id/${id}/400/300`;
};

let lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perferendis aliquam expedita, iure deserunt, architecto facere officia unde alias aperiam ipsum suscipit repellendus doloremque, minus ut molestiae voluptas quae blanditiis.';

import Card from './Card';
export default {
  name: 'ArticlePage',
  components: {
    Card
  },
  data: () => ({
    articles: [
      {
        id: 1,
        title: 'test1',
        text: lorem,
        image_url: loremPicsum(14)
      },
      {
        id: 2,
        title: 'test2',
        text: lorem,
        image_url: loremPicsum(25)
      },
      {
        id: 3,
        title: 'test3',
        text: lorem,
        image_url: loremPicsum(10)
      },
      {
        id: 4,
        title: 'test4',
        text: lorem,
        image_url: loremPicsum(93)
      },
      {
        id: 5,
        title: 'test5',
        text: lorem,
        image_url: loremPicsum(33)
      }
    ]
  })
};
</script>

<style>
</style>