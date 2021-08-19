<template>
<div class="W-100">

  <img :src="requestImg(comp.imagens[0].imgUrl)" alt="" class="w-100"/>
</div>
</template>

<script>
export default {
  props: {
    comp: Object,
  },
  data(){
    return{
      mobile:false
    }
  },
  methods: {
    requestImg(img) {
      if (this.SITE_STATICO == false && this.comp.imagens != undefined ) {
        if (img!=null) {
          return this.API_URL + "/images/" + img;
          
        }
      } else return require("~/assets/imagens/" + img);
    },
  },
};
</script>