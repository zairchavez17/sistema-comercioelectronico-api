import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./pedido";
import { Producto } from "./producto";


@Entity('pedido_detalles')
export class PedidoDetalle {

    @PrimaryGeneratedColumn({ name: 'id_pedido_detalle' })
    idPedidoDetalle: number;

    @ManyToOne(() => Pedido, (pedido) => pedido.pedidosDetalles)
    @JoinColumn({ name: 'id_pedido' })
    pedido: Pedido;

    @ManyToOne(() => Producto, (producto) => producto.pedidosDetalles)
    @JoinColumn({ name: 'id_producto' })
    producto: Producto;

    @Column({ name: 'precio_unitario' })
    precioUnitario: number;

    @Column({ name: 'cantidad' })
    cantidad: number;

    @Column({ name: 'subtotal' })
    subtotal: number;

    @Column({ name: 'igv' })
    igv: number;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @CreateDateColumn({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;
}