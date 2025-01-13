import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./producto";
import { Usuario } from "./usuario";


@Entity('opiniones')
export class Opinion {


    @PrimaryGeneratedColumn({ name: 'id_opinion' })
    idOpinion: number;


    @ManyToOne(() => Producto, (producto) => producto.opiniones)
    @JoinColumn({ name: 'id_producto' })
    producto: Producto;

    @ManyToOne(() => Usuario, (usuario) => usuario.opiniones)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;

    @Column({ name: 'calificacion' })
    calificacion: string;

    @Column({ name: 'comentario' })
    comentario: string;

    @Column({ name: 'fecha_opinion' })
    fechaOpinion: Date;


    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @CreateDateColumn({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;


}