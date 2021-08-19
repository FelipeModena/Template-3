<template>
    <div class="mr-3 cor-fundo-secundaria">
          <div v-for="cont,index in contato" :key="index" :id="'foter-lista-contatos-'+index">
            <h5 v-if="cont.rua" >{{cont.rua}}</h5>
            <h5 v-if="cont.bairro" >Bairro {{cont.bairro}}</h5>
            <h5 v-if="cont.cidade">{{cont.cidade}} - {{cont.estado}}</h5>
            <h5 v-if="cont.email">{{cont.email}}</h5>
            <div v-if="cont.telefone">
            <h5  v-for="telefone in cont.telefone" :key="telefone">{{telefone}}</h5>
            </div>
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
</template>

<script>
export default {
    props:{
        contato:Array 
    }
}
</script>

<style scoped>
#footer-lista-icones img {
  margin-right: 10px;
}
</style>