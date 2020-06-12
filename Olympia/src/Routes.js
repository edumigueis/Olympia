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
import FeedBack from './components/feedback/FeedBack.vue';
import Sugestoes from './components/sugestoes/Sugestoes.vue';
import Denuncia from './components/denuncia/Denuncia.vue';
import IntServ from './components/intServ/IntServ.vue';
import Servico from './components/servico/Servico.vue';
import ErrorPage from './components/errorPage/ErrorPage.vue';

export const routes = [

    { path: '/', component: Welcome, titulo: ' W E L C O M E' },
    { path: '*', component: NotFound, titulo: '4 0 4' },
    { path: '/InternalServerError', component: IntServ, titulo: '5 0 0' },
    { path: '/error', component: ErrorPage, titulo: 'Oops' },
    { path: '/home', component: Home, titulo: 'H O M E', meta: { transition: 'zoom' }  },
    { path: '/artes', component: Artes, titulo: 'A R T E S' },
    { path: '/obra/:id', component: Obra, titulo: 'O B R A' },
    { path: '/servico/:id', component: Servico, titulo: 'S E R V I Ç O' },
    { path: '/evento/:id', component: Evento, titulo: 'E V E N T O' },
    { path: '/eventos', component: Eventos, titulo: 'E V E N T O S' },
    { path: '/pesquisar', component: SearchResult, titulo: 'P E S Q U I S A', meta: { transition: 'zoom' } },
    { path: '/sobre', component: Sobre, titulo: 'S O B R E' },
    { path: '/perfil', component: Perfil, titulo: 'P E R F I L' },
    { path: '/cadastro', component: CadastroUser, titulo: 'C A D A S T R O' },
    { path: '/login', component: Login, titulo: 'L O G I N' },
    { path: '/categorias', component: Categorias, titulo: 'C A T E G O R I A S' },
    { path: '/literatura', component: Literatura, titulo: 'L I T E R A T U R A'},
    { path: '/post', component: Post, titulo: 'P O S T'},
    { path: '/cinema', component: Cinema, titulo: 'C I N E M A'},
    { path: '/escultura', component: Escultura, titulo: 'E S C U L T U R A'},
    { path: '/arquitetura', component: Arquitetura, titulo: 'A R Q U I T E T U R A'},
    { path: '/artes-cenicas', component: ArtesCenicas, titulo: 'A R T E S C E N I C A S'},
    { path: '/pintura', component: Pintura, titulo: 'P I N T U R A'},
    { path: '/fotografia', component: Fotografia, titulo: 'F O T O G R A F I A'},
    { path: '/sugestoes', component: Sugestoes, titulo: 'S U G E R I R'},
    { path: '/feedback', component: FeedBack, titulo: 'F E E D B A C K'},
    { path: '/denuncia', component: Denuncia, titulo: 'D E N U N C I A R'},
    { path: '/artes-digitais', component: ArtesDigitais, titulo: 'A R T E S D I G I T A I S'},
    { path: '/musica', component: Musica, titulo: 'M U S I C A'}

]


