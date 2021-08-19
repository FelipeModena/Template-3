<template>
  <div class="d-flex container lista-imagens-componente-mobile-id">
    <div
      class="p-2 img-lista-imagens-componente-tamanho img-hover-padrao"
      v-for="(lista, indexComponente) in listas"
      :key="indexComponente"
    >
      <img
        class="img-fluid-lista-imagens-componente"
        height="100%"
        :src="require('~/assets/imagens/' + lista)"
        :alt="lista"
        @click="aumentaImg(lista)"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    listas: { type: Array },
    idModal: String,
  },
  methods: {
    aumentaImg(img) {
      this.$emit("imgEscolhida", img);
      this.$bvModal.show(this.idModal);
    },
  },
  mounted() {
    if (document.documentElement.clientWidth <= 1030) {
      console.log("mobile laytou");
        $(".lista-imagens-componente-mobile-id").addClass('lista-imagens-componente-mobile').removeClass('d-flex p-2');
    }

    addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 1030) {
        $(".lista-imagens-componente-mobile-id").addClass('lista-imagens-componente-mobile').removeClass('d-flex p-2');
        console.log("mobile laytou");
      } else {
        $(".lista-imagens-componente-mobile-id").addClass('d-flex p-2').removeClass('lista-imagens-componente-mobile');

      }
    });
  },
};
</script>
<style>
.img-lista-imagens-componente-tamanho {
  width: 200px;
  transition: 0.3s;
}

.img-fluid-lista-imagens-componente {
  max-width: 100%;
  height: 150px;
}

.lista-imagens-componente-mobile{
    display: grid;
    grid-template-columns: 30% 30%  30% ;
}
</style>
