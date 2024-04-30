import { IsNotEmpty } from "class-validator";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entitites/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_postagem"})
export class Postagem{

    @ApiProperty()  
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()  
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string;

    @ApiProperty()  
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @ApiProperty()  
    @UpdateDateColumn()
    data: Date;

    @ApiProperty({ type: () => Tema }) 
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema;

    @ApiProperty({ type: () => Usuario })  
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;

}