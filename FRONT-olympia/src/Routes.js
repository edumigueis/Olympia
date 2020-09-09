import Welcome from './components/welcome/Welcome.vue';
import Home from './components/home/Home.vue';
import Artes from './components/artes/Artes.vue';
import Obra from './components/obra/Obra.vue';
import Evento from './components/evento/Evento.vue';
import Eventos from './components/eventos/Eventos.vue';
import Sobre from './components/sobre/Sobre.vue';
import CadastroUser from './components/cadastro-user/CadastroUser.vue';
import ForaDoAr from './components/fora-do-ar/ForaDoAr.vue';
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
import Servico from './components/servico/Servico.vue';
import ErrorPage from './components/errorPage/ErrorPage.vue';
import UserNotFound from './components/userNotFound/UserNotFound.vue';

export const routes = [
  {
    path: '/', component: Welcome, titulo: ' W E L C O M E', beforeEnter: (to, from, next) => {
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  { path: '*', component: NotFound, titulo: '4 0 4' },
  { path: '/error', component: ErrorPage, titulo: 'O O P S' },
  { path: '/siteoff', component: ForaDoAr, titulo: 'F O R A  D O  A R !' },
  { path: '/userNotFound', component: UserNotFound, titulo: 'N Ã O  E X I S T O !' },
  {
    path: '/home', component: Home, titulo: 'H O M E', meta: { transition: 'zoom' }/*, beforeEnter: (to, from, next) => {
        if (window.$cookies.isKey("user_cadastro")) {
            document.location.href = "/#/categorias";
          } else if (!window.$cookies.isKey("user_session")) {
            document.location.href = "/#/login";
          }
          $.ajax({
      url: "https://olympiaserver.ddns.net/",
      type: "GET",
      dataType: "json",
      contentType: "application/json",
      complete: function(jqXHR, status) {
        if (status != "parsererror") {
          document.location.href = "/#/siteoff";
        }
        else
            next();
      }
    });
    }  */},
  {
    path: '/artes', component: Artes, titulo: 'A R T E S', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/obra/:id', component: Obra, titulo: 'O B R A', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/servico/:id', component: Servico, titulo: 'S E R V I Ç O', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/evento/:id', component: Evento, titulo: 'E V E N T O', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/eventos', component: Eventos, titulo: 'E V E N T O S'/*, beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }*/
  },
  {
    path: '/pesquisar', component: SearchResult, titulo: 'P E S Q U I S A', meta: { transition: 'zoom' }, beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  { path: '/sobre', component: Sobre, titulo: 'S O B R E' },
  {
    path: '/perfil', component: Perfil, titulo: 'P E R F I L', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/perfil/:username', component: Perfil, titulo: 'P E R F I L', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/cadastro', component: CadastroUser, titulo: 'C A D A S T R O', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (window.$cookies.isKey("user_session")) {
        document.location.href = "/#/home";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/login', component: Login, titulo: 'L O G I N', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_session")) {
        document.location.href = "/#/home";
      } else if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/categorias', component: Categorias, titulo: 'C A T E G O R I A S', beforeEnter: (to, from, next) => {
      if (!window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/literatura', component: Literatura, titulo: 'L I T E R A T U R A', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/post', component: Post, titulo: 'P O S T', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/cinema', component: Cinema, titulo: 'C I N E M A', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/escultura', component: Escultura, titulo: 'E S C U L T U R A', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/arquitetura', component: Arquitetura, titulo: 'A R Q U I T E T U R A', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/artes-cenicas', component: ArtesCenicas, titulo: 'A R T E S C E N I C A S', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/pintura', component: Pintura, titulo: 'P I N T U R A', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/fotografia', component: Fotografia, titulo: 'F O T O G R A F I A', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/sugestoes', component: Sugestoes, titulo: 'S U G E R I R', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/feedback', component: FeedBack, titulo: 'F E E D B A C K', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/denuncia', component: Denuncia, titulo: 'D E N U N C I A R', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/artes-digitais', component: ArtesDigitais, titulo: 'A R T E S D I G I T A I S', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  },
  {
    path: '/musica', component: Musica, titulo: 'M U S I C A', beforeEnter: (to, from, next) => {
      if (window.$cookies.isKey("user_cadastro")) {
        document.location.href = "/#/categorias";
      } else if (!window.$cookies.isKey("user_session")) {
        document.location.href = "/#/login";
      }
      $.ajax({
        url: "https://olympiaserver.ddns.net/",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        complete: function (jqXHR, status) {
          if (status != "parsererror") {
            document.location.href = "/#/siteoff";
          }
          else
            next();
        }
      });
    }
  }
]


