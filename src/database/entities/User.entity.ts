import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity({ name: "users", schema: "private" })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 60 })
    name: string;

    @Column({ length: 40 })
    email: string;

    @Column({ length: 16, nullable: true })
    password: string;
}
