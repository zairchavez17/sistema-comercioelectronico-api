import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Pedido } from "./pedido";

@Entity('metodos_pago')
export class MetodoPago {

    @PrimaryGeneratedColumn({ name: 'id_metodo_pago' })
    idMetodoPago: number;

    @Column({ name: 'metodo' })
    metodo: string;

    @Column({ name: 'estado' })
    estado: string;

    @Column({name: 'fecha_pago'})
    fechaPago: Date;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @CreateDateColumn({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;

    @OneToMany(() => Pedido, (pedido) => pedido.metodoPago)
    pedidos: Pedido[];

}