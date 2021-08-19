<template>
  <b-carousel
    class="carousel-botao carousel-index-1"
    v-model="slide"
    :interval="1000"
    indicators
    img-width="300"
    img-height="200"
    style="text-shadow: 1px 1px 2px #333; height 260px"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide
    img-blank
      v-for="(img, index) in comp.imagens?comp.imagens:''"
      :key="index"
    >
              <img
            width="300px"
            :src="requestImg(img)"
            alt="conteudoSlide"
          />
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  props: {
    comp: Object,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    requestImg(img) {
      if (img != undefined) {
        if (this.SITE_STATICO == false && this.comp.imagens != undefined) {
          return this.API_URL + "/images/" + img.imgUrl;
        } else return require("~/assets/imagens/" + img.imgUrl);
      }
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
.carousel-index-1 ol {
  margin-bottom: 38px;
}
.carousel-index-1 ol > li {
  width: 10%;
}
</style>