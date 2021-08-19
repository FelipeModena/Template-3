 <template>
  <div id="pagina-contato" class="d-flex" :style="styleCorFundo()">
    <form
      id="form-contato"
      class="cor-fundo-primaria my-5 mx-auto p-5"
      :style="styleCorFundoForms()"
      v-if="mobile == false"
    >
      <h1>{{ comp.titulo }}</h1>
      <label for="form-nome">Nome</label>
      <input id="form-nome" type="text" />
      <label for="form-telefone">Telefone</label>
      <input id="form-telefone" type="text" />
      <label for="form-email">Email</label>
      <input type="email" name="" id="" />
      <label for="form-mensagem">Mensagem</label>
      <textarea name="" id="" cols="30" rows="10"></textarea>

      <button class="btn-azul my-3" :style="styleBotaoFormulario()">
        Enviar!
      </button>
    </form>
    <div
      id="form-contato-mobile"
      v-if="mobile == true"
      class="cor-fundo-primaria my-5 mx-auto p-5"
    >
      <a
        v-if="contatoApi.facebook"
        :href="
          contatoApi.facebook
            ? contatoApi.facebook
            : 'https://pt-br.facebook.com/'
        "
      >
        <img src="~/assets/icones/facebook.png" alt="facebook" /><span>{{
          contatoApi.facebook.split(".com/")[1]
        }}</span>
      </a>
      <a
        v-if="contatoApi.instagram"
        :href="
          contatoApi.instagram
            ? contatoApi.instagram
            : 'https://www.instagram.com/'
        "
      >
        <img src="~/assets/icones/instagram.png" alt="instagram" /><span>{{
          contatoApi.instagram.split(".com/")[1]
        }}</span>
      </a>
      <a
        v-if="contatoApi.linkedin"
        :href="
          contatoApi.linkedin ? contatoApi.linkedin : 'https://br.linkedin.com/'
        "
      >
        <img src="~/assets/icones/linkedin.png" alt="linkedin" /><span>{{
          contatoApi.linkedin.split(".com/")[1]
        }}</span></a
      >
      <a
        v-if="contatoApi.whatsapp"
        :href="'https://api.whatsapp.com/send?phone=' + contatoApi.whatsapp"
      >
        <img src="~/assets/icones/whatsapp.png" alt="whatsapp" /><span>{{
          contatoApi.whatsapp
        }}</span></a
      >
      <a href="">
        <img src="~/assets/icones/message.png" alt="email" /><span>{{
          contatoApi.email
        }}</span></a
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    comp: Object,
  },
  computed: {
    ...mapGetters({
      contatoApi: "conteudoApi/contatoAPI",
    }),
  },
  data() {
    return {
      mobile: false,
    };
  },
  methods: {
    styleCorFundo() {
      if (this.comp != null && this.comp != undefined) {
        return [
          { background: this.comp.corFundo },
        ];
      }
    },
    styleCorFundoForms() {
      if (this.comp != null && this.comp != undefined) {
        return [
          { color: this.comp.corTitulo },
          { background: this.comp.corSubTitulo },
        ];
      }
    },
    styleBotaoFormulario() {
      if (this.comp != null && this.comp != undefined) {
        return [
          { color: this.comp.corTitulo },
          { background: this.comp.corBotao1 },
        ];
      }
    },
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
#form-contato-mobile {
  display: inline-grid;
}
#form-contato-mobile a {
  margin-top: 15px;
}
#form-contato-mobile a > img {
  padding-right: 15px;
}
