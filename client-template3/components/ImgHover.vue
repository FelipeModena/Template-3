<template>
  <div class="my-4">
    <div class="d-inline-flex px-5" id="index-caixa-colecoes">
      <NuxtLink
        :to="`colecoes?colecao=${index}`"
        class="
          mx-3
          img-responsiva-caixas-colecoes
          my-2
          container
          cor-fundo-primaria
        "
        :style="styleImagem(img)"
        v-for="(img, index) in comp.imagens"
        :key="index"
      >
        <h2 class="text-center centered py-auto">{{ img.texto }}</h2>
      </NuxtLink>
    </div>
    <div class="container my-1">
      <NuxtLink :to="comp.urlBotao1"
        ><button class="btn-transparente-primaria" :style="styleBotao()">
          {{comp.txtBotao1}}
        </button></NuxtLink
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    comp: Object,
  },
  data() {
    return {
      imgEscolhidaModal: "",
      imgTextoEscolhidaModal: "",
    };
  },
  methods: {
    requestImg(img) {
      if (this.SITE_STATICO == false && this.comp.imagens != undefined) {
        return this.API_URL + "/images/" + img;
      } else return require("~/assets/imagens/" + img);
    },
    styleImagem(img) {
      return [{ background: 'url(' + this.requestImg(img.imgUrl)+')' }];
    },
        styleBotao() {
      if (this.comp.corFundo != undefined) {
        return [{ "border-color": this.comp.corBotao1 }, { color: this.comp.corBotao1 }];
      }
    },
    mounted() {
      if (document.documentElement.clientWidth <= 850) {
      }

      addEventListener("resize", () => {
        if (document.documentElement.clientWidth <= 850) {
          $("#index-caixa-final-informativa").css("display", "list-item");
          $("#index-caixa-colecoes")
            .removeClass("d-inline-flex")
            .css("display", "grid")
            .css("grid-template-columns", "auto auto")
            .css("grid-gap", "12px");
        } else {
          $("#index-caixa-final-informativa").css("display", "grid");
          $("#index-caixa-colecoes").addClass("d-inline-flex");
        }
      });
    },
  },
};
</script>
<style scoped>
.img-responsiva-caixas-colecoes {
  transition: 0.6s;
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
}
.img-responsiva-caixas-colecoes:hover {
  cursor: pointer;
  opacity: 70%;
  transition: 0.6s;
}
</style>
