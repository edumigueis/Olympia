create table Obras(
idObra int identity primary key not null,
idUsuario int not null,
nome varchar(50) not null,
descricao varchar(800) not null,
arte varchar(20) not null,
categorias varchar(70) not null, /*{'bodyArt','B&W','releitura'} (limite 5)*/
tags varchar(100) null, /*{'preto e branco','domingaoNaPraiaBemGostosinho'} (limite 5)*/
dataPost date not null,
dadosTecnicos varchar(200) not null, /*{"criador":'quem postou',"tecnica": ['stencil','tinta à oleo'],"dimensoes":'50x60'}*/
constraint fkObra foreign key (idUsuario) references Usuarios (idUsuario)
)

create table Servicos(
idServico int identity primary key not null,
idUsuario int not null,
nome varchar(50) not null, /*bio*/
descricao varchar(800) not null,
arte varchar(20) not null,
categorias varchar(70) not null, /*{'bodyArt','B&W','releitura'} (limite 5)*/
tags varchar(100) null, /*{'preto e branco','domingaoNaPraiaBemGostosinho'} (limite 5)*/
dataPost date not null,
constraint fkUsuarioServico foreign key (idUsuario) references Usuarios (idUsuario)
)

create table Eventos(
idEvento int identity primary key not null,
idUsuario int not null, /*quem postou*/
nome varchar(50) not null, /*bio*/
descricao varchar(800) not null,
arte varchar(20) not null,
dataPost date not null,
dataEvento date not null,
localizacaoCoord varchar(100) not null,
constraint fkUsuarioEvento foreign key (idUsuario) references Usuarios (idUsuario)
)

create table Usuarios(
idUsuario int identity primary key not null,
nome varchar(40) not null,
userName varchar(30) not null,
email varchar(100) not null,
senha varchar(100) not null,
foto varbinary(max) not null,
biografia varchar(500) not null,
bio varchar(50) not null,
configs char(31) not null /*{"menu":0,"deslig":0,"login":1}*/
)

create table Publicacoes(
idPublicacao int identity primary key not null,
idUsuario int not null, /*quem postou*/
texto varchar(200) not null,
tags varchar(100) null, /*{'preto e branco','domingaoNaPraiaBemGostosinho'} (limite 5)*/
foto varbinary(max) not null,
dataPost date not null,
constraint fkUsuarioPublicacao foreign key (idUsuario) references Usuarios (idUsuario)
)

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

create table Imagens(
idfoto int identity primary key not null,
foto varbinary(max) not null,
idObra int null,
idServico int null,
idEvento int null,
constraint kfObraFoto foreign key (idObra) references Obras (idObra),
constraint fkServicoFoto foreign key (idServico) references Servicos (idServico),
constraint fkEventoFoto foreign key (idEvento) references Eventos (idEvento)
)