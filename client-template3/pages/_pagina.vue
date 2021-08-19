<template>
  <div class="w-100">
    <div
      class="w-100 "
      v-for="(componente, i) in paginasAPICopia.componente"
      :key="i"
    >
      <h4>{{ componente.tipoComponente }}</h4>
      <FormsContato :comp="componente" v-if="componente.tipoComponente=='FORMULARIO'"/>
      <!-- <span>{{ componente.imagens }}</span> -->

      <!-- <p v-for="img,index in componente.imagens" :key="index">{{ img }}</p> -->
      <ImgDireita :comp="componente" v-if="componente.tipoComponente=='TEXTO ESQUERDA E IMAGEM DIREITA'" />
      <ImgPrincipal :comp="componente" v-if="componente.tipoComponente=='IMAGEM PRINCIPAL'" />
      <ImgEsquerda :comp="componente" v-if="componente.tipoComponente=='TEXTO DIREITA E IMAGEM ESQUERDA'" /> 
      <BannerCaroussel :comp="componente" v-if="componente.tipoComponente=='CARROUSEL'"/>   
       <!-- <FormsContato :comp="componente" v-if="componente.tipoComponente=='FORMULARIO'"/>
       -->
      <!-- <ImgHover :comp="componente" v-if="componente.tipoComponente=='IMAGENS HOVER'" />
      <Mapa :comp="componente" v-if="componente.tipoComponente=='MAPA'" />
      <ListaImagens :comp="componente" v-if="componente.tipoComponente=='CONTEUDO GALERIA'" />-->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      paginasAPI: "conteudoApi/paginasAPI",
    }),
  },
  data() {
    return {
      paginasAPICopia: "",
    };
  },
  watch: {
    paginasAPI: function (newVal, oldVal) {
      if (process.browser) {
        this.paginasAPI.forEach((pagina) => {
          if (pagina.url == this.$nuxt.$route.path) {
            this.paginasAPICopia = JSON.parse(JSON.stringify(pagina));
          }
        });
      }
    },
  },
  methods: {
    ...mapActions({
      getPaginas: "conteudoApi/getPaginas",
    }),
  },
  created() {
    this.getPaginas();
  },
};
</script>

<style lang="less" scoped>
</style>