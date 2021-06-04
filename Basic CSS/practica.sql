/*
practica de prueba sql
*/

create table Propietario (
    id_propietario int not null primary key,
    nombre varchar(45),
    direccion varchar(45),
    telefono varchar(10),
    correo varchar(60),
    comentarios text
);

create table Tipo_Mascota (
    id_tipo_mascota int not null primary key,
    descripcion varchar(45)
);

create table Mascota (
    id_mascota int not null primary key, 
    nombre varchar(45),
    tipo_mascota int,
    propietario int, 
    CONSTRAINT fk_Tipo_mascota FOREIGN KEY (tipo_mascota) REFERENCES Tipo_Mascota (id_tipo_mascota),
    CONSTRAINT fk_Propietario FOREIGN KEY (propietario) REFERENCES Propietario (id_propietario)
);

/*
INSERTAR
*/

insert into mascota 
    values 
    ('123', 'Tonny', '45', '999'),
    ('222', 'Mateo', '00', ''),
    ('333', 'Zeus', '07', '444'),
    ('444', 'Lucas', '45', '');

insert into Propietario
    values 
    ('999', 'Antonio Collazos', 'calle 10', '9989888', '@dominio', null),
    ('444', 'Ricardo Valencia', 'calle 11', '45364657', '@otrodominio', null);

insert into Tipo_Mascota
    values 
    ('45', 'Labrador'),
    ('07', 'Salchicha'),
    ('01', 'Crio'),
    ('00', 'Gran Danes');

/*
● Listar todas las mascotas.
● Listar las mascotas que no han sido adoptadas.
● Listar el número de mascotas por cada tipo de mascota.
● Listar los propietarios que tengan más de una mascota.
● Listar el número de mascotas por cada tipo de mascota y por cada propietario.
● Listas los propietarios que no tienen mascotas.
*/ 

/*Listar todas las mascotas.*/
select nombre from Mascota;

/*Listar las mascotas que no han sido adoptadas.*/
select nombre from Mascota
    where propietario IS NULL OR propietario = '';

/*Listar el número de mascotas por cada tipo de mascota*/
select count(id_mascota), id_tipo_mascota from mascota, tipo_mascota
    where id_mascota = id_tipo_mascota;

/*Los propietariosque no tienen mascota*/
select propietario, p.id_propietario, from mascota, propietario p;


