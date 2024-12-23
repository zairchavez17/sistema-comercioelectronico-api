import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Rol } from "./rol";



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

    @Column({ name: 'dni' })
    dni: string;

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
}