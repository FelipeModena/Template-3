<template>
  <div>
    <header id="header-index-layout" class="">
      <div class="container-index-solo">
        <div id="index-logo-container">
          <img width="6%" src="~/assets/icones/imagem.png" alt="" />
          <span class="logotipo-cor">Logotipo</span>
        </div>
        <div class="d-inline-flex">
          <NuxtLink
            :to="opcao.url"
            v-for="(opcao, index) in paginasHeader()"
            :key="index"
            class="hover-padrao"
          >
            <h5 class="mx-4" :id="`nav-opcao` + index">
              {{ opcao.nomePagina }}
            </h5>
          </NuxtLink>
        </div>
      </div>
    </header>
    <main>
      <div v-for="(comp, index) in paginaComponentes" :key="index">
        <p>{{ comp }}</p>
        <ImgEsquerda
          :comp="comp"
          v-if="comp.tipoComponente == 'TEXTO DIREITA E IMAGEM ESQUERDA'"
        />
        <Caroussel
          :comp="comp"
          v-if="comp.tipoComponente == 'BANNER PRINCIPAL'"
        />
        <ImgHover :comp="comp" v-if="comp.tipoComponente == 'IMAGENS HOVER'" />
      </div>
      <b-carousel
        class="carousel-index-1"
        v-model="slide"
        :interval="0"
        indicators
        img-width="1024"
        img-height="400"
        style="text-shadow: 1px 1px 2px #333; height 260px"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          img-blank
          v-for="(slideColecao, index4) in index.carouselTopo"
          :key="index4"
        >
          <img
            class="w-100"
            width="100%"
            :src="require(`~/assets/imagens/${slideColecao}`)"
            alt="conteudoSlide"
          />
        </b-carousel-slide>
      </b-carousel>

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
            :style="`background:url(${require('~/assets/imagens/' +
              colecoes.imgPrincipal)})`"
            v-for="(colecoes, index) in nossasColecoes"
            :key="index"
          >
            <h2 class="text-center centered py-auto">{{ colecoes.titulo }}</h2>
          </NuxtLink>
        </div>
        <div class="container my-1">
          <NuxtLink to="colecoes"
            ><button class="btn-transparente-primaria">
              Conheça todas as coleções
            </button></NuxtLink
          >
        </div>
      </div>

      <!-- <div class="my-3 cor-fundo-primaria" id="index-caixa-final-informativa">
        <img src="~/assets/imagens/imgCarousel3Index.jpg" alt="" />
        <div id="index-caixa-final-informativa-texto" class="py-5 px-3">
          <h3 class="mb-3">{{ index.saibaMaisInferior.titulo }}</h3>
          <p class="text-left">{{ index.saibaMaisInferior.texto }}</p>
          <div class="container text-center">
            <NuxtLink to="colecoes"
              ><button class="btn-transparente-secundaria">
                Saiba mais
              </button></NuxtLink
            >
          </div>
        </div>
      </div> -->
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  // layout: "indexLayout",
  computed: {
    ...mapGetters({
      index: "conteudo/index",
      nossasColecoes: "conteudo/nossasColecoes",
      paginasAPI: "conteudoApi/paginasAPI",
      headerOpcoes: "conteudo/headerOpcoes",
    }),
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      paginaComponentes: "",
    };
  },
  watch: {
    paginasAPI: function (newVal, oldVal) {
      if (process.browser) {
        this.paginasAPI.forEach((pagina) => {
          if (
            pagina.url == this.$nuxt.$route.path &&
            this.paginaComponentes == ""
          ) {
            this.paginaComponentes = JSON.parse(
              JSON.stringify(pagina.componente)
            );
            console.log(this.paginaComponentes);
          }
        });
      }
    },
  },
  methods: {
    ...mapActions({
      getPaginasApi: "conteudoApi/getPaginas",
    }),
    paginasHeader() {
      if (this.SITE_STATICO == true) {
        return this.headerOpcoes;
      } else {
        return this.paginasAPI;
      }
    },
    requestFoto(img) {
      ///*statico*/ return "_nuxt/assets/imagens/" + img;
      /*dasboard */ return this.API_URL + "/images/" + img;
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
  created() {
    this.getPaginasApi();
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
};
</script>

<style>
#header-index-layout {
  position: absolute;
  width: 100%;
  z-index: 20;
  background-color: var(--cor-padrao-header-transparente);
}
#index-logo-container span,
img {
  vertical-align: middle;
}

.container-index-solo {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.carousel-index-1 ol {
  margin-bottom: 38px;
}
.carousel-index-1 ol > li {
  width: 10%;
}
#index-caixa-final-informativa {
  display: grid;
  grid-template-columns: auto auto;
}
.img-responsiva-caixas-colecoes {
  transition: 0.6s;
  background-repeat: no-repeat !important;
  background-size: contain;
  background-position: center;
  height: 280px;
  width: 104%;
}
.img-responsiva-caixas-colecoes:hover {
  cursor: pointer;
  opacity: 70%;
  transition: 0.6s;
}
</style>
