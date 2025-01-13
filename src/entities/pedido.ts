import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Usuario } from "./usuario";
import { MetodoPago } from "./metodo-pago";
import { MetodoEnvio } from "./metodo-envio";
import { PedidoDetalle } from "./pedido-detalle";


@Entity('pedidos')
export class Pedido{

    @PrimaryGeneratedColumn({name:'id_pedido'})
    idPedido: number;

    @ManyToOne(()=>Usuario, (usuario)=>usuario.pedidos)
    @JoinColumn({name:'id_usuario'})
    usuario: Usuario;

    @ManyToOne(() => MetodoPago, (metodoPago) => metodoPago.pedidos)
    @JoinColumn({name:'id_metodo_pago'})
    metodoPago: MetodoPago;

    @ManyToOne(() => MetodoEnvio, (metodoEnvio) => metodoEnvio.pedidos)
    @JoinColumn({name:'id_metodo_envio'})
    metodoEnvio: MetodoEnvio;

    @Column({name:'fecha_pedido'})
    fechaPedido: Date;

    @Column({name:'numero_factura'})
    numeroFactura: string;

    @Column({name:'factura_url'})
    facturaUrl: string;

    @Column({name:'total'})
    total: number;

    @Column({name:'estado'})
    estado: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @CreateDateColumn({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;

     @OneToMany(() => PedidoDetalle, (pedidoDetalle) => pedidoDetalle.pedido)
     pedidosDetalles: PedidoDetalle[];

}