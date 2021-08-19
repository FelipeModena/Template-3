<template>
  <div id="pagina-contato" class="d-flex">
    <form
      id="form-contato"
      class="cor-fundo-primaria my-5 mx-auto p-5"
      v-if="mobile == false"
    >
      <h1>Fale conosco</h1>
      <label for="form-nome">Nome</label>
      <input id="form-nome" type="text" />
      <label for="form-telefone">Telefone</label>
      <input id="form-telefone" type="text" />
      <label for="form-email">Email</label>
      <input type="email" name="" id="" />
      <label for="form-mensagem">Mensagem</label>
      <textarea name="" id="" cols="30" rows="10"></textarea>

      <button class="btn-azul my-3">Enviar!</button>
    </form>
    <div id="form-contato-mobile" v-if="mobile == true" class="cor-fundo-primaria my-5 mx-auto p-5 ">
      <a href="https://pt-br.facebook.com/">
        <img src="~/assets/icones/facebook.png" alt="facebook" /><span
          >facebook.com/Loja</span
        >
      </a>
      <a href="https://www.instagram.com/">
        <img src="~/assets/icones/instagram.png" alt="instagram" /><span
          >@nome.da.loja</span
        ></a
      >
      <a href="https://br.linkedin.com/">
        <img src="~/assets/icones/linkedin.png" alt="linkedin" /><span
          >linkedin.com/Loja</span
        ></a
      >
      <a href="https://www.whatsapp.com/?lang=pt_br">
        <img src="~/assets/icones/whatsapp.png" alt="whatsapp" /><span>(11) 98654-5485</span></a
      >
      <a href=""> <img src="~/assets/icones/message.png" alt="email" /><span>email@gmail.com</span></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: false,
    };
  },
  mounted() {
    if (document.documentElement.clientWidth <= 850) {
      this.mobile = true;
    }

    addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 850) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    });
  },
};
</script>

<style>
#pagina-contato {
  background-image: url("~/assets/imagens/fundoPaginaContato.png");
}
#form-contato {
  display: inline-grid;
  margin: 0 auto;
  width: 50%;
}
#form-contato label {
  margin-top: 15px;
}
#form-contato input,
textarea {
  background: #c9c9c9;
}
#form-contato-mobile{
  display: inline-grid;
}
#form-contato-mobile a{
  margin-top: 15px;
}
#form-contato-mobile a>img{
  padding-right: 15px;
}
</style>
