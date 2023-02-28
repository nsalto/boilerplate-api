import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users", schema: "private" })
export class User {
/*     @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updated_at: Date; */

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 60 })
    name: string;

    @Column({ length: 40 })
    email: string;

    @Column({ length: 16, nullable: true })
    password: string;

    @Column({ type: "boolean", default: false })
    is_active: boolean;

    @Column({ length: 20, default: "authenticated" })
    role: string;

    @Column({ length: 255, nullable: true })
    profile_picture_url: string;

    @Column({ length: 20, nullable: true })
    phone_number: string;
}
