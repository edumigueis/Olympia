import Welcome from './components/welcome/Welcome.vue';
import Home from './components/home/Home.vue';
import Artes from './components/artes/Artes.vue';
import Obra from './components/obra/Obra.vue';
import Evento from './components/evento/Evento.vue';
import Eventos from './components/eventos/Eventos.vue';
import Sobre from './components/sobre/Sobre.vue';
import CadastroUser from './components/cadastro-user/CadastroUser.vue';
import CadastroArtist from './components/cadastro-artist/CadastroArtist.vue';
import Login from './components/login/Login.vue';
import Categorias from './components/categories/Categories.vue';
import Literatura from './components/literatura/Literatura.vue';
import Cinema from './components/cinema/Cinema.vue';
import Arquitetura from './components/arquitetura/Arquitetura.vue';
import Escultura from './components/escultura/Escultura.vue';
import Perfil from './components/perfil/Perfil.vue';
import Post from './components/post/Post.vue';
import ArtesCenicas from './components/artes-cenicas/Artes-Cenicas.vue';
import Musica from './components/musica/Musica.vue';
import Pintura from './components/pintura/Pintura.vue';
import Fotografia from './components/fotografia/Fotografia.vue';
import ArtesDigitais from './components/artes-digitais/ArtesDigitais.vue';
import SearchResult from './components/search-result/SearchResult.vue';
import NotFound from './components/not-found/NotFound.vue';

export const routes = [

    { path: '/', component: Welcome, titulo: ' W E L C O M E' },
    { path: '*', component: NotFound, titulo: '4 0 4' },
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001hometohomexprofileor0283user$xx234132873olympia'
    , component: Home, titulo: 'H O M E', meta: { transition: 'zoom' }  },
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001artestoartesxestatic0001&contentpartial&no&0olympia'
    , component: Artes, titulo: 'A R T E S' },
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001detalhestodetalhesxprofileor0283user$xx234132873olympia'
    , component: Obra, titulo: 'O B R A' },
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001eventotoeventoxprofileor0283user$xx234132873olympia'
    , component: Evento, titulo: 'E V E N T O' },
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001eventostoeventosxprofileor0283user$xx234132873olympia'
    , component: Eventos, titulo: 'E V E N T O S' },
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001search&resulttosearch&resultxprofileor0283user$xx234132873olympia'
    , component: SearchResult, titulo: 'P E S Q U I S A', meta: { transition: 'zoom' } },
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001sobretosobresxestatic0001&contentpartial&no&0olympia'
    , component: Sobre, titulo: 'S O B R E' },
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001perfiltoperfilxprofileor0283user$xx234132873olympia'
    , component: Perfil, titulo: 'P E R F I L' },
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001cadastrotocadastroxestatic0001&contentpartial&no&0olympia'
    , component: CadastroUser, titulo: 'C A D A S T R O' },
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001logintologinxestatic0001&contentpartial&no&0olympia'
    , component: Login, titulo: 'L O G I N' },
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001categoriastocategoriasxprofileor0283user$xx234132873olympia'
    , component: Categorias, titulo: 'C A T E G O R I A S' },
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001literaturatoliteraturaxestatic0001&contentpartial&no&0olympia'
    , component: Literatura, titulo: 'L I T E R A T U R A'},
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001posttopostxprofileor0283user$xx234132873olympia'
    , component: Post, titulo: 'P O S T'},
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001cinematocinemaxestatic0001&contentpartial&no&0olympia'
    , component: Cinema, titulo: 'C I N E M A'},
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001esculturatoesculturaxestatic0001&contentpartial&no&0olympia'
    , component: Escultura, titulo: 'E S C U L T U R A'},
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001arquiteturatoarquiteturaxestatic0001&contentpartial&no&0olympia'
    , component: Arquitetura, titulo: 'A R Q U I T E T U R A'},
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001artes&cenicastoartes&cenicasxestatic0001&contentpartial&no&0olympia'
    , component: ArtesCenicas, titulo: 'A R T E S C E N I C A S'},
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001pinturatopinturaxestatic0001&contentpartial&no&0olympia'
    , component: Pintura, titulo: 'P I N T U R A'},
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001fotografiatofotografiaxestatic0001&contentpartial&no&0olympia'
    , component: Fotografia, titulo: 'F O T O G R A F I A'},
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001artes&digitaistoartes&digitaisxestatic0001&contentpartial&no&0olympia'
    , component: ArtesDigitais, titulo: 'A R T E S D I G I T A I S'},
    { path: '/go33265routedefinedat&vue&01routermodule200ok&code0001musicatomusicaxestatic0001&contentpartial&no&0olympia'
    , component: Musica, titulo: 'M U S I C A'}

]


