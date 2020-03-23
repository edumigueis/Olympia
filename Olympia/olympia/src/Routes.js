// alunopic/src/routes.js

import Home from './components/home/Home.vue';
import Artes from './components/cadastro/Artes.vue';
import Obra from './components/home/Obra.vue';
import Evento from './components/cadastro/Evento.vue';
import Eventos from './components/home/Eventos.vue';
import Sobre from './components/cadastro/Sobre.vue';

export const routes = [

    { path: '/', component: Home, titulo: 'H O M E' },
    { path: '/artes', component: Artes, titulo: 'A R T E S' },
    { path: '/obra', component: Obra, titulo: 'O B R A' },
    { path: '/evento', component: Evento, titulo: 'E V E N T O' },
    { path: '/eventos', component: Eventos, titulo: 'E V E N T O S' },
    { path: '/sobre', component: Sobre, titulo: 'S O B R E' }
]
