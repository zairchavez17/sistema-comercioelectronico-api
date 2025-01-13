import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./categoria";
import { Promocion } from "./promocion";
import { Favorito } from "./favorito";
import { Opinion } from "./opinion";
import { PedidoDetalle } from "./pedido-detalle";




@Entity('productos')
export class Producto{

    @PrimaryGeneratedColumn({name: 'id_producto'})
    idProducto: number;


    @ManyToOne(() => Categoria, (categoria) => categoria.categorias)
    @JoinColumn({name: 'id_categoria'})
    categoria: Categoria;

    @Column({name: 'nombre'})
    nombre: string;

    @Column({name: 'descripcion'})
    descripcion: string;

    @Column({name: 'imagen_url'})
    imagenUrl: string;

    @Column({name: 'precio_unitario'})
    precioUnitario: number;

    @Column({name: 'stock'})
    stock: number;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;

    @OneToMany(() => Opinion, (opinion) => opinion.producto)
    opiniones: Opinion[];

    @OneToMany(()=>Promocion, (promocion) => promocion.producto)
    promociones: Promocion[];

    @OneToMany(() => Favorito, (favorito) => favorito.producto)
    favoritos: Favorito[];

    @OneToMany(() => PedidoDetalle, (pedidoDetalle) => pedidoDetalle.producto)
    pedidosDetalles: PedidoDetalle[];


}