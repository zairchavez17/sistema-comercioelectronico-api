import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./pedido";


@Entity('metodos_envio')
export class MetodoEnvio {

    @PrimaryGeneratedColumn({ name: 'id_metodo_envio' })
    idMetodoEnvio: number;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'costo' })
    costo: number;

    @Column({ name: 'direccion' })
    direccion: number;

    @Column({ name: 'tiempo_estimado' })
    tiempoEstimado: number;

    @Column({ name: 'fecha_envio' })
    fechaEnvio: Date;

    @Column({ name: 'fecha_entrega' })
    fechaEntrega: Date;

    @Column({ name: 'estado' })
    estado: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @CreateDateColumn({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;

    @OneToMany(() => Pedido, (pedido) => pedido.metodoEnvio)
    pedidos: Pedido[];
}