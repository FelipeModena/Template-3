<template>
  <div>
    <div>
      <img
        class="banner-superior"
        :src="requestFoto(quemSomos.bannerSuperior.img)"
        alt="bannerSuperior.png"
      />
    </div>
    <div
      class="cor-fundo-primaria banner-img-texto py-4"
      id="banner-img-esquerda"
    >
      <div class="d-flex align-items-center" v-if="hideImgs == false">
        <img
          :src="requestFoto(quemSomos.bannerImgEsquerda.img)"
          :alt="quemSomos.bannerImgEsquerda.img"
        />
      </div>
      <div class="my-auto">
        <span v-html="quemSomos.bannerImgEsquerda.texto"></span>
      </div>
    </div>
    <div>
      <img
        class="banner-superior"
        :src="requestFoto(quemSomos.bannerMeio.img)"
        alt="bannerSuperior.png"
      />
    </div>
    <div
      class="cor-fundo-primaria banner-img-texto py-4"
      id="banner-img-direita"
    >
      <div class="my-auto">
        <span v-html="quemSomos.bannerImgDireita.texto"></span>
      </div>
      <div class="d-flex align-items-center" v-if="hideImgs == false">
        <img
          :src="requestFoto(quemSomos.bannerImgDireita.img)"
          alt="quemSomos.bannerImgDireita.img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      hideImgs: false,
      teste: "teste.jpg",
    };
  },
  methods: {
    requestFoto(img) {
        ///*statico*/ return "_nuxt/assets/imagens/" + img;
      /*dasboard */ return this.API_URL + "/images/" + img;
    },
  },
  computed: {
    ...mapGetters({
      quemSomos: "conteudo/quemSomos",
    }),
  },

  mounted() {
    if (document.documentElement.clientWidth <= 700) {
      this.hideImgs = true;
    }

    addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 700) {
        this.hideImgs = true;
      } else {
        this.hideImgs = false;
      }
    });
  },
};
</script>

<style scoped>

</style>
