create table Obras(
idObra int identity primary key not null,
idUsuario int not null,
nome varchar(50) not null,
descricao varchar(800) not null,
idArte int not null,
categorias varchar(20) not null, /*{21,51,91,16,56} (limite 5)*/
tags varchar(150) null, /*{'preto e branco','domingaoNaPraiaBemGostosinho'} (limite 5)*/
dataPost date not null,
dadosTecnicos varchar(200) not null, /*{"criador":'quem postou',"tecnica": ['stencil','tinta à oleo'],"dimensoes":'50x60'}*/
constraint fkObra foreign key (idUsuario) references Usuarios (idUsuario),
constraint fkArteObra foreign key (idArte) references Artes (idArte)
)

select * from Obras

create table Servicos(
idServico int identity primary key not null,
idUsuario int not null,
nome varchar(50) not null, /*bio*/
descricao varchar(800) not null,
idArte int not null,
categorias varchar(20) not null, /*{21,51,91,16,56} (limite 5)*/
tags varchar(150) null, /*{'preto e branco','domingaoNaPraiaBemGostosinho'} (limite 5)*/
dataPost date not null,
constraint fkUsuarioServico foreign key (idUsuario) references Usuarios (idUsuario),
constraint fkArteServico foreign key (idArte) references Artes (idArte)
)

select * from Servicos

create table Eventos(
idEvento int identity primary key not null,
idUsuario int not null, /*quem postou*/
nome varchar(50) not null, /*bio*/
descricao varchar(800) not null,
idArte int not null,
dataPost date not null,
dataEvento date not null,
localizacaoCoord varchar(100) not null,  /*{"Lat":-29.02929292929,"Long":13.423222}*/
constraint fkUsuarioEvento foreign key (idUsuario) references Usuarios (idUsuario),
constraint fkArteEvento foreign key (idArte) references Artes (idArte)
)

select * from Eventos

create table Usuarios(
idUsuario int identity primary key not null,
nome varchar(40) not null,
userName varchar(30) not null,
email varchar(255) not null,
senha varchar(500) not null,
foto varchar(max) not null,
biografia varchar(1200) not null,
bio varchar(50) not null,
configs char(49) not null, /*{"menu":0,"deslig":0,"login":1,"capa":3,"dark":1}*/
seguindo varchar(max) not null, /*{1,9,6,2,5,6,3,26}*/
seguidores varchar(max) not null /*{111,94,6,2,5,644,3044,216}*/
)

select * from Usuarios

create table Publicacoes(
idPublicacao int identity primary key not null,
idUsuario int not null, /*quem postou*/
texto varchar(200) not null,
tags varchar(150) null, /*{'preto e branco','domingaoNaPraiaBemGostosinho'} (limite 5)*/
foto varchar(max) not null,
dataPost date not null,
constraint fkUsuarioPublicacao foreign key (idUsuario) references Usuarios (idUsuario)
)

select * from Publicacoes

create table Curtidas(
idCurtida int identity primary key not null,
idUsuario int not null,
idObra int null,
idServico int null,
idPublicacao int null,
idEvento int null,
constraint fkUsuarioCurtida foreign key (idUsuario) references Usuarios (idUsuario),
constraint kfObraCurtida foreign key (idObra) references Obras (idObra),
constraint fkServicoCurtida foreign key (idServico) references Servicos (idServico),
constraint fkPublicacaoCurtida foreign key (idPublicacao) references Publicacoes (idPublicacao),
constraint fkEventoCurtida foreign key (idEvento) references Eventos (idEvento)
)

select * from Curtidas

create table Fotos(
idFoto int identity primary key not null,
foto varchar(max) not null,
idObra int null,
idServico int null,
idEvento int null,
constraint kfObraFoto foreign key (idObra) references Obras (idObra),
constraint fkServicoFoto foreign key (idServico) references Servicos (idServico),
constraint fkEventoFoto foreign key (idEvento) references Eventos (idEvento)
)

select * from Fotos

create table Categorias(
idCategoria int identity primary key not null,
idArte int not null,
nome varchar(45) not null,
constraint fkArteCategoria foreign key (idArte) references Artes (idArte)
)

select * from Categorias

create table Artes(
idArte int identity primary key not null,
nome varchar(30) not null
)

select * from Artes

