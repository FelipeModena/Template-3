import Vue from 'vue'

Vue.mixin({
  computed: {
    API_URL: ({ $axios }) => $axios.defaults.baseURL,
    SITE_STATICO: () =>   false 

  }
})
