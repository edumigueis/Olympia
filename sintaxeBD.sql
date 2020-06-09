DBCC CHECKIDENT('Eventos', RESEED, -1) /*zerador de identity*/

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
localizacaoCoord varchar(1000) not null,  /*{"Lat":-29.02929292929,"Long":13.423222}*/
endereco varchar(300) not null,
horario varchar (300) not null,
linkSite varchar(300) not null
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
bio varchar(130) not null,
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

create table Feedbacks(
idFeedback int identity primary key not null,
idUsuario int not null,
descricao varchar(1000) not null,
categoria varchar(100) not null,
foto varchar(max) not null,
constraint fkFeedbackUsuario foreign key (idUsuario) references Usuarios (idUsuario)
)

create table Sugestoes(
idSugestao int identity primary key not null,
idUsuario int not null,
descricao varchar(1000) not null,
categoria varchar(100) not null,
foto varchar(max) not null,
constraint fkSugestaoUsuario foreign key (idUsuario) references Usuarios (idUsuario)
)

create table Denuncias(
idDenuncia int identity primary key not null,
idUsuario int not null,
tipoDenuncia varchar(100) not null,
descricao varchar(1000) not null,
constraint fkDenunciaUsuario foreign key (idUsuario) references Usuarios (idUsuario)
)

create table Admins(
idAdmin int identity primary key not null,
userName varchar(100) not null,
senha varchar(500) not null,
email varchar(255) not null
)

alter proc sp_ValidateAdmin
@Username varchar(100),
@Password varchar(500)
as
Begin
    select * from Admins where userName=@Username and senha=@Password
End

create proc sp_FotosObra /*retorna todas as fotos de uma obra*/
@idObra int
as
Begin
    select * from Fotos where idObra=@idObra
End

create proc sp_FotosServico /*retorna todas as fotos de um serviço*/
@idServico int
as
Begin
    select * from Fotos where idServico=@idServico
End


create proc sp_FotosEvento /*retorna todas as fotos de um evento*/
@idEvento int
as
Begin
    select * from Fotos where idEvento=@idEvento
End

create proc sp_UserObra /*retorna o id do usuario que postou a obra*/
@idObra int
as
Begin
    select u.idUsuario from Usuarios u, Obras o where 
	o.idUsuario = u.idUsuario and
	o.idObra = @idObra
End

create proc sp_UserServico /*retorna o id do usuario que postou o serviço*/
@idServico int
as
Begin
    select u.idUsuario from Usuarios u, Servicos s where 
	s.idUsuario = u.idUsuario and
	s.idServico = @idServico
End

create proc sp_ExisteUsername /*retorna os usuarios cadastrados com certo username*/
@userName varchar(30)
as
Begin
    select * from Usuarios where userName = @userName
End

create proc sp_AllObrasUser /*retorna as obras que um usuario possui*/
@idUsuario int
as
Begin
    select o.idObra from Usuarios u, Obras o where 
	o.idUsuario = u.idUsuario and
	u.idUsuario = @idUsuario
End

create proc sp_AllServicosUser /*retorna os servicos que um usuario possui*/
@idUsuario int
as
Begin
    select s.idServico from Usuarios u, Servicos s where 
	s.idUsuario = u.idUsuario and
	u.idUsuario = @idUsuario
End

create proc sp_AllEventosArte /*retorna os eventos pertencentes a uma arte*/
@idArte int
as
Begin
    select * from Eventos where idArte = @idArte
End

create proc sp_ObrasCurtidas /*retorna o ID das obras. Ordenados pelas mais curtidas*/
as
Begin
	select o.idObra
	from Obras o, Curtidas c 
	where c.idObra = o.idObra 
	group by o.idObra 
	order by 
	(select count(*) from Obras o, Curtidas c 
	where c.idObra = o.idObra) 
End

create proc sp_ObrasNaoCurtidas /*retorna as obras não curtidas. Ordenados por data*/
as
Begin
	select a.* from Obras as a 
	left join Curtidas as b
	on a.idObra = b.idObra 
	where b.idObra  is null
	order by dataPost
End

create proc sp_PublicacoesCurtidas /*retorna o ID das publicações. Ordenados pelas mais curtidas*/
as
Begin
	select o.idPublicacao
	from Publicacoes o, Curtidas c 
	where c.idPublicacao = o.idPublicacao 
	group by o.idPublicacao 
	order by 
	(select count(*) from Publicacoes o, Curtidas c 
	where c.idPublicacao = o.idPublicacao) 
End

create proc sp_PublicacoesNaoCurtidas /*retorna as publicações não curtidas. Ordenados por data*/
as
Begin
	select a.* from Publicacoes as a 
	left join Curtidas as b
	on a.idPublicacao = b.idPublicacao 
	where b.idPublicacao  is null
	order by dataPost
End

create proc sp_ServicosCurtidas /*retorna o ID dos serviços. Ordenados pelos mais curtidos*/
as
Begin
	select o.idServico
	from Servicos o, Curtidas c 
	where c.idServico = o.idServico 
	group by o.idServico 
	order by 
	(select count(*) from Servicos o, Curtidas c 
	where c.idServico = o.idServico) 
End

create proc sp_ServicosNaoCurtidos /*retorna os serviços não curtidos. Ordenados por data*/
as
Begin
	select a.* from Servicos as a 
	left join Curtidas as b
	on a.idServico = b.idServico 
	where b.idServico  is null
	order by dataPost
End

alter proc sp_ObrasOrderByData /*retorna todas as obras ordenadas pela data*/
as
Begin
	select * from Obras order by dataPost
End

create proc sp_ServicosOrderByData /*retorna todos os serviços ordenados pela data*/
as
Begin
	select * from Servicos order by dataPost
End

create proc sp_PublicacoesOrderByData /*retorna todas as publicações ordenadas pela data*/
as
Begin
	select * from publicacoes order by dataPost
End

create proc sp_UserNameId /*retorna o ID do usuário, baseado no username*/
@userName varchar(30)
as
Begin
	select idUsuario from Usuarios where username = @userName
End

create proc sp_ExisteCodigoObra /*as obras existentes com certo código*/
@codObra varchar(50)
as
Begin
	select codObra from Obras where codObra = @codObra
End

create proc sp_MudarBio
@bio varchar(50),
@biografia varchar(1200),
@idUsuario int
as
Begin
	update Usuarios set bio = @bio, biografia = @biografia where idusuario = @idUsuario
End

alter proc sp_VerificarDadosByUser
@Username varchar(30)
as
Begin
    select * from Usuarios where userName=@Username
End

alter proc sp_VerificarDadosByEmail
@Email varchar(255)
as
Begin
    select * from Usuarios where email=@Email
End

create proc sp_UserByUsername
@Username varchar(30)
as
Begin
    select * from Usuarios where userName=@Username
End

create proc sp_UserByEmail
@Email varchar(255)
as
Begin
    select * from Usuarios where email=@Email
End

