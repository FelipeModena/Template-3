<template>
  <div class="cor-fundo-primaria">
    <div
      v-for="(loja, index) in nossasLojas"
      :key="index"
      class="lojas-containers cor-fundo-secundaria px-5 py-4 my-3"
    >
      <div v-if="(mobile == false)" :id="`lojas-containers-iframe` + index">
        <p v-html="loja.iframe"></p>
      </div>
      <div :id="`lojas-containers-img` + index">
        <img :src="require(`~/assets/imagens/${loja.img}`)" alt="" />
      </div>
      <div :id="`lojas-containers-textos` + index">
        <h2>{{ loja.dados.nomeLoja }}</h2>
        <div class="py-2">
          <p>{{ loja.dados.rua }}</p>
          <p>{{ loja.dados.bairro }}</p>
          <p>{{ loja.dados.cidade }}</p>
        </div>
        <div class="py-2">
          <p v-for="tel in loja.dados.telefone" :key="tel">{{ tel }}</p>
        </div>
        <p>{{ loja.dados.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      nossasLojas: "conteudo/nossasLojas",
    }),
  },
  data() {
    return {
      mobile: false,
    };
  },
  mounted() {
    if (document.documentElement.clientWidth <= 850) {
      this.mobile = true;
      $(".lojas-containers").css("display", "block");
    }
    addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 850) {
        $(".lojas-containers").css("display", "block");
        this.mobile = true;
      } else {
        this.mobile = false;
        $(".lojas-containers").css("display", "grid");
      }
    });
  },
};
</script>

<style scoped>
.lojas-containers {
  display: grid;
  grid-template-columns: auto auto auto;
}
</style>
