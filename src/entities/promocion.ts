import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./producto";


@Entity('promociones')
export class Promocion{

    @PrimaryGeneratedColumn({name:'id_promocion'})
    idPromocion: number;

    @ManyToOne(()=>Producto, (producto)=>producto.promociones)
    @JoinColumn({name:'id_producto'})
    producto: Producto;

    @Column({name:'valor_descuento'})
    valorDescuento: number;

    @Column({name:'codigo'})
    codigo: string;

    @Column({name:'fecha_inicio'})
    fechaInicio: Date;

    @Column({name:'fecha_fin'})
    fechaFin: Date;

    @Column({name:'estado'})
    estado: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @CreateDateColumn({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;
    
}