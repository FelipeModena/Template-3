
export const state = () => ({
    paginas: null,
    contato: null,
    rodape: null
})
export const getters = {
    paginasAPI(state) {
        return state.paginas;
    },
    rodapeAPI(state) {
        return state.rodape;
    },
    contatoAPI(state) {
        return state.contato;
    },

}

export const actions = {
    getPaginas({ commit }) {
        const config = {
            params: {
                idAdmin: 15
            }
        }
        this.$axios.get('/api/paginas/GetPaginasComponentesRodapeContato', config)
            .then((response) => {
                if (response.data.paginas) {
                    commit('SET_PAGINAS', response.data.paginas);
                }
                if (response.data.contatoRodape != null) {
                    response.data.contatoRodape.contato.rodapeAtivo = response.data.contatoRodape.rodape.rodapeAtivo;
                    commit('SET_CONTATO', response.data.contatoRodape.contato);
                    commit('SET_RODAPE', response.data.contatoRodape.rodape);
                }
            })
            .catch(err => {
                err++;
                // console.log("paginas.js: " + err);
            });
    },
}

export const mutations = {
    SET_PAGINAS(state, paginasAxios) {

        paginasAxios.sort(function (pag1, pag2) {
            return pag1.ordem - pag2.ordem;
        })
        paginasAxios = paginasAxios.filter(function (pagina) {
            return pagina.ativa !== false
        })
        paginasAxios.forEach((pag, index) => {
            paginasAxios[index].componente = pag.componente.filter(function (comp) {
                return comp.ativo !== false
            })
            paginasAxios[index].componente.sort(function (pag1, pag2) {
                return pag1.ordem - pag2.ordem;
            })
        });
        state.paginas = paginasAxios;
    },
    SET_RODAPE(state, rodapeAxios) {
        state.rodape = rodapeAxios;
    },
    SET_CONTATO(state, contatoAxios) {
        delete contatoAxios.administrador
        state.contato = contatoAxios;
    },
}
