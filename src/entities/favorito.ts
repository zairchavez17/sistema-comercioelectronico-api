import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario";
import { Producto } from "./producto";


@Entity('favoritos')
export class Favorito {



    @PrimaryGeneratedColumn({ name: 'id_favorito' })
    idFavorito: number;

    @ManyToOne(() => Usuario, (usuario) => usuario.favoritos)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;

    @ManyToOne(() => Producto, (producto) => producto.favoritos)
    @JoinColumn({ name: 'id_producto' })
    producto: Producto;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @CreateDateColumn({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;


}