import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Rol } from "./rol";
import { Favorito } from "./favorito";
import { Opinion } from "./opinion";
import { Pedido } from "./pedido";



@Entity('usuarios')
export class Usuario {

    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    idUsuario: number;

    @ManyToOne(() => Rol, (rol) => rol.roles)
    @JoinColumn({ name: 'id_rol' })
    rol: Rol;

    @Column({ name: 'nombres' })
    nombres: string;

    @Column({ name: 'apellido_paterno' })
    apellidoPaterno: string;

    @Column({ name: 'apellido_materno' })
    apellidoMaterno: string;

    @Column({ name: 'fecha_nacimiento' })
    fechaNacimiento: Date;

    @Column({ name: 'tipo_documento' })
    tipoDocumento: string;

    @Column({ name: 'numero_documento' })
    numeroDocumento: string;

    @Column({ name: 'telefono' })
    telefono: string;

    @Column({ name: 'direccion' })
    direccion: string;

    @Column({ name: 'correo' })
    correo: string;

    @Column({ name: 'clave' })
    clave: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @CreateDateColumn({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;

    @OneToMany(() => Favorito, (favorito) => favorito.usuario)
    favoritos: Favorito[];

    @OneToMany(() => Opinion, (opinion) => opinion.usuario)
    opiniones: Opinion[];

    @OneToMany(() => Pedido, (pedido) => pedido.usuario)
    pedidos: Pedido[];


}