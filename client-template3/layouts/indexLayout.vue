<template>
  <div>
    <Nuxt />
    <footer>
      <div class="cor-fundo-primaria centraliza py-3">
        <div>
          <img width="5%" src="~/assets/icones/imagem.png" alt="" />
          <span class="logotipo-cor">Logotipo</span>
        </div>
        <div id="footer-lista-icones">
          <a href="https://pt-br.facebook.com/">
            <img src="~/assets/icones/facebook.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="~/assets/icones/instagram.png" alt="instagram"
          /></a>
          <a href="https://br.linkedin.com/">
            <img src="~/assets/icones/linkedin.png" alt="linkedin"
          /></a>
          <a href="https://www.whatsapp.com/?lang=pt_br">
            <img src="~/assets/icones/whatsapp.png" alt="whatsapp"
          /></a>
          <a href=""> <img src="~/assets/icones/message.png" alt="email" /></a>
        </div>
      </div>
      <div class="container py-3">
        <img width="8%" src="~/assets/icones/logo_sharkdata.png" alt="" />
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      paginas: "conteudoApi/paginas",
      headerOpcoes: "conteudo/headerOpcoes",
    }),
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

<style >
.page-enter-active,
.page-leave-active {
  transition: opacity 0.8s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>