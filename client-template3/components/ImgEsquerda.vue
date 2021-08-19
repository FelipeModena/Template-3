<template>
  <div class="mb-2 img-texto-componente px-5 py-5 d-flex" :style="styleFundo()">
      <div class="pr-5">
        <img width="400px"  :src="requestImg()" alt="" />
      </div>
      <div class="m-auto" :style="styleCorTitulo()">
        <h2>
          <strong>{{ comp.titulo }}</strong>
        </h2>
        <p v-html="comp.texto"></p>
        <div class="text-center">
        <NuxtLink v-if="comp.urlBotao1" :to="comp.urlBotao1?comp.urlBotao1:''"><button class="cor-fundo-primaria p-2 " :style="styleBotao()"> {{comp.txtBotao1}}</button> </NuxtLink>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    mobile: false,
    img: { type: String },
    titulo: { type: String },
    conteudoTxt: { type: String },
    comp: Object,
  },
  methods: {
    requestImg() {
      console.log(this.comp.imagens.length);
      if (this.comp.imagens.length == 0) {
        console.log("Img direita vazia");
        return;
      }
      if (this.SITE_STATICO == false && this.comp.imagens != undefined) {
        return this.API_URL + "/images/" + this.comp.imagens[0].imgUrl;
      } else return require("~/assets/imagens/" + this.comp.imgUrl);
    },
    styleFundo() {
      if (this.comp.corFundo != undefined) {
        return [{ background: this.comp.corFundo }];
      }
    },
    styleCorTitulo() {
      if (this.comp.corTitulo != undefined) {
        return [{ color: this.comp.corTitulo }];
      }
    },
    styleBotao() {
      if (this.comp.corFundo != undefined) {
        return [{ "border-color": this.comp.corBotao1 }, { color: this.comp.corBotao1 }];
      }
    },
  },
  mounted() {
    if (document.documentElement.clientWidth <= 1200) {
      console.log("mobile laytou");
      $(".img-direita-componente-id")
        .addClass("d-flex-inline ")
        .removeClass("d-flex ");
    }

    addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 1200) {
        $(".img-direita-componente-id")
          .addClass("d-flex-inline ")
          .removeClass("d-flex ");
        console.log("mobile laytou");
      } else {
        $(".img-direita-componente-id")
          .addClass("d-flex ")
          .removeClass("d-flex-inline ");
      }
    });
  },
};
</script>

<style>
@media screen and (max-width: 750px) {
  .img-texto-componente{
    display: grid !important;
  }
    .img-texto-componente img{
    width: 100%;
  }
}
</style>
