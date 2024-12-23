import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./producto";

@Entity('categorias')
export class Categoria {


    @PrimaryGeneratedColumn({ name: 'id_categoria' })
    idCategoria: number;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'descripcion' })
    descripcion: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @CreateDateColumn({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;

    @OneToMany(()=>Producto, (producto)=>producto.categoria)
    categorias: Categoria[];

}