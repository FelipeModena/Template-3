
export const state = () => ({
    headerOpcoes: [
        { nomePagina: "Index", url: "/", id: 0 },
        { nomePagina: "Quem somos", url: "quemSomos", id: 1 },
        { nomePagina: "Nossas coleções", url: "colecoes", id: 2 },
        { nomePagina: "Nossas lojas", url: "lojas", id: 3 },
        { nomePagina: "Contato", url: "contato", id: 4 },
    ],
    index: {
        carouselTopo: ['imgCarousel1Index.png', 'imgCarousel2Index.png', 'imgCarousel3Index.jpg',],
        saibaMaisInferior: {
            titulo:'Das passarelas para seu closet',
            texto:'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ornare metus, ut venenatis diam. Ut blandit dolor non velit tincidunt congue. Nunc imperdiet, sem eleifend imperdiet lobortis, ex est ultricies risus, sit amet vestibulum sapien sapien eget felis. Curabitur consectetur orci est, ut molestie ipsum porttitor quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac turpis sed mauris sagittis venenatis at vel sem. Suspendisse a pulvinar massa.</p>'
        }
    },
    quemSomos: {
        bannerSuperior: {
            img: "banner1.png"
        },
        bannerImgEsquerda: {
            img: "imgVerticalEsquerda.png",
            texto: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ornare metus, ut venenatis diam. Ut blandit dolor non velit tincidunt congue. Nunc imperdiet, sem eleifend imperdiet lobortis, ex est ultricies risus, sit amet vestibulum sapien sapien eget felis. Curabitur consectetur orci est, ut molestie ipsum porttitor quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac turpis sed mauris sagittis venenatis at vel sem. Suspendisse a pulvinar massa.</p>"
        },
        bannerMeio: {
            img: "banner2.png"
        },
        bannerImgDireita: {
            img: "imgVerticalDireita.png",
            texto: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ornare metus, ut venenatis diam. Ut blandit dolor non velit tincidunt congue. Nunc imperdiet, sem eleifend imperdiet lobortis, ex est ultricies risus, sit amet vestibulum sapien sapien eget felis. Curabitur consectetur orci est, ut molestie ipsum porttitor quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac turpis sed mauris sagittis venenatis at vel sem. Suspendisse a pulvinar massa.</p>"
        }
    },
    nossasColecoes: [
        {
            titulo: "Coleção outono/inverno 2021",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ornare metus, ut venenatis diam. Ut blandit dolor non velit tincidunt congue. Nunc imperdiet, sem eleifend imperdiet lobortis, ex est ultricies risus, sit amet vestibulum sapien sapien eget felis. Curabitur consectetur orci est, ut molestie ipsum porttitor quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac turpis sed mauris sagittis venenatis at vel sem. Suspendisse a pulvinar massa.",
            imgPrincipal: 'imgGrandeBolinha.png',
            imgUrl: [
                ['imgCarousel1.png', 'imgCarousel2.png', 'imgCarousel3.png', 'imgCarousel4.png', 'imgCarousel5.png', 'imgCarousel6.png'],
                ['imgCarousel1.png', 'imgCarousel2.png', 'imgCarousel3.png', 'imgCarousel4.png', 'imgCarousel5.png', 'imgCarousel6.png']
            ]
        },
        {
            titulo: "Coleção Festa das flores",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ornare metus, ut venenatis diam. Ut blandit dolor non velit tincidunt congue. Nunc imperdiet, sem eleifend imperdiet lobortis, ex est ultricies risus, sit amet vestibulum sapien sapien eget felis. Curabitur consectetur orci est, ut molestie ipsum porttitor quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac turpis sed mauris sagittis venenatis at vel sem. Suspendisse a pulvinar massa.",
            imgPrincipal: 'imgGrandeBlusaAmarela.png',
            imgUrl: [
                ['imgCarousel1.png', 'imgCarousel2.png', 'imgCarousel3.png', 'imgCarousel4.png', 'imgCarousel5.png', 'imgCarousel6.png'],
                ['imgCarousel1.png', 'imgCarousel2.png', 'imgCarousel3.png', 'imgCarousel4.png', 'imgCarousel5.png', 'imgCarousel6.png']
            ]
        },
        {
            titulo: "Coleção conforto atemporal",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ornare metus, ut venenatis diam. Ut blandit dolor non velit tincidunt congue. Nunc imperdiet, sem eleifend imperdiet lobortis, ex est ultricies risus, sit amet vestibulum sapien sapien eget felis. Curabitur consectetur orci est, ut molestie ipsum porttitor quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac turpis sed mauris sagittis venenatis at vel sem. Suspendisse a pulvinar massa.",
            imgPrincipal: 'imgGrandeChapeu.png',
            imgUrl: [
                ['imgCarousel1.png', 'imgCarousel2.png', 'imgCarousel3.png', 'imgCarousel4.png', 'imgCarousel5.png', 'imgCarousel6.png'],
                ['imgCarousel1.png', 'imgCarousel2.png', 'imgCarousel3.png', 'imgCarousel4.png', 'imgCarousel5.png', 'imgCarousel6.png']
            ]
        },
        {
            titulo: "Linha festa",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ornare metus, ut venenatis diam. Ut blandit dolor non velit tincidunt congue. Nunc imperdiet, sem eleifend imperdiet lobortis, ex est ultricies risus, sit amet vestibulum sapien sapien eget felis. Curabitur consectetur orci est, ut molestie ipsum porttitor quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac turpis sed mauris sagittis venenatis at vel sem. Suspendisse a pulvinar massa.",
            imgPrincipal: 'imgGrandeRuiva.png',
            imgUrl: [
                ['imgCarousel1.png', 'imgCarousel2.png', 'imgCarousel3.png', 'imgCarousel4.png', 'imgCarousel5.png', 'imgCarousel6.png'],
                ['imgCarousel1.png', 'imgCarousel2.png', 'imgCarousel3.png', 'imgCarousel4.png', 'imgCarousel5.png', 'imgCarousel6.png']
            ]
        },
        
    ],
    nossasLojas: [
        {
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14759.815261084364!2d-49.0512815539673!3d-22.355372669862188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1623957519726!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
            img: 'imgLoja1.jpg',
            dados: {
                nomeLoja: 'Matriz',
                rua: 'Rua das Paineiras n° 245',
                bairro: 'Jd.Florido',
                cidade: 'Florianopolis',
                telefone: ['(xx) 96525-5422', '(xx) 3216-5482'],
                email: 'email.loja.com.br',
                contatos: []
            }
        },
        {
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14759.815261084364!2d-49.0512815539673!3d-22.355372669862188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1623957519726!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
            img: 'imgLoja2.jpg',
            dados: {
                nomeLoja: 'Loja 1',
                rua: 'Rua das Paineiras n° 245',
                bairro: 'Jd.Florido',
                cidade: 'Florianopolis',
                telefone: ['(xx) 96525-5422', '(xx) 3216-5482'],
                email: 'email.loja.com.br',
                contatos: []
            }
        },
        {
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14759.815261084364!2d-49.0512815539673!3d-22.355372669862188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1623957519726!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
            img: 'imgLoja3.jpg',
            dados: {
                nomeLoja: 'Loja 2',
                rua: 'Rua das Paineiras n° 245',
                bairro: 'Jd.Florido',
                cidade: 'Florianopolis',
                telefone: ['(xx) 96525-5422', '(xx) 3216-5482'],
                email: 'email.loja.com.br',
                contatos: []
            }
        }

    ]


})

export const getters = {
    index(state) {
        return state.index;
    },
    headerOpcoes(state) {
        return state.headerOpcoes;
    },
    quemSomos(state) {
        return state.quemSomos;
    },
    nossasColecoes(state) {
        return state.nossasColecoes;
    },
    nossasLojas(state) {
        return state.nossasLojas;
    }
}
