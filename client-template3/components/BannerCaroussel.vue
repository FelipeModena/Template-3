<template>
  <div>
    <div class="py-3" :style="styleFundo()">
      <div
      v-if="comp.imagens[0]!=null"
        :style="styleCorFundo()"
        class="banner-img-texto img-fluid py-4 px-4"
      >
        <img :src="requestImg(comp.imagens[0])" :alt="'img'" />
        <div class="my-auto pl-3">
          <h2 class="text-center">{{ comp.titulo }}</h2>
          <p v-html="textoImg(0)"></p>
        </div>
      </div>
      <b-carousel
        v-if="comp.imagens.length > 1"
        class="carousel-botao"
        v-model="slide"
        :interval="0"
        controls
        img-width="1024"
        img-height="220"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          class="carrousel-responsivo-img"
          img-blank
          v-for="(listaImgs, indexCarousel) in spliteImagsCarrousel()"
          :key="indexCarousel + '-externo'"
        >
          <img
            v-for="(miniImg, idx) in listaImgs"
            :key="idx + '-interno'"
            @click="showModalColecoes(miniImg, idx)"
            class="mx-2"
            :src="requestImg(miniImg)"
            alt="conteudoSlide"
            v-b-modal.modal-colecoes
          />
        </b-carousel-slide>
      </b-carousel>
    </div>
    <b-modal
      :ref="'modal-caroussel-' + this.comp.id"
      class="modal-colecoes bg-transparent"
      title="oie"
      :style="styleFundo()"
      :hide-header="true"
      :hide-footer="true"
      
    >
        <img class="img-fluid" :src="requestImg(modalColecoes)" alt="" />
        <p>{{ modalColecoes.texto }}</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    comp: Object,
  },
  data() {
    return {
      slide: 0,
      slideModal: 1,
      sliding: null,
      modalColecoes: "",
      miniFotos: "",
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
    textoImg(id) {
      if (this.comp.imagens.length == 0 || id == null) {
        return;
      }
      if (this.SITE_STATICO == false && this.comp.imagens != undefined) {
        return this.comp.imagens[id].texto;
      } else return require("~/assets/imagens/" + this.comp.texto);
    },
    spliteImagsCarrousel() {
      let arraysImgsSeparadas = [];
      let tamanhoCarrousel = 4;
      for (let i = 1; i < this.comp.imagens.length; i += tamanhoCarrousel)
        arraysImgsSeparadas.push(
          this.comp.imagens.slice(i, i + tamanhoCarrousel)
        );
      return arraysImgsSeparadas;
    },
    styleFundo() {
      if (this.comp.corFundo != undefined) {
        return [{ background: this.comp.corFundo }];
      }
    },
    styleCorFundo() {
      if (this.comp.corTitulo != undefined) {
        return [{ color: this.comp.corTitulo }];
      }
    },
    showModalColecoes(index, posicao) {
      this.modalColecoes = index;
      this.$refs["modal-caroussel-" + this.comp.id].show();
    },
    onSlideStart(slide) {
      if (slide == "modal") {
        return;
      }
      this.sliding = true;
    },
    onSlideEnd(slide) {
      if (slide == "modal") {
        return;
      }
      this.sliding = false;
    },
  },
};
</script>

<style>
.banner-img-texto {
  display: flex;
}

.carrousel-responsivo-img img {
  width: 200px;
}

.carousel-botao .carousel-control-next-icon {
  background-image: url("~/assets/icones/forward-arrow.png");
  background-color: red;
  border-radius: 20px;
  padding: 19px;
}

.carousel-botao .carousel-control-prev-icon {
  background-image: url("~/assets/icones/forward-arrow.png");
  transform: rotate(180deg);
  border-radius: 20px;
  padding: 19px;
}

@media screen and (max-width: 800px) {
  .carrousel-responsivo-img img {
    width: 100px;
  }
  .banner-img-texto {
    display: grid;
  }
  .banner-img-texto img {
    width: 100%;
  }
}

@media screen and (max-width: 500px) {
  .carrousel-responsivo-img img {
    width: 40px;
  }
  .banner-img-texto {
    display: grid;
  }
  .banner-img-texto img {
    width: 100%;
  }
}
</style>
