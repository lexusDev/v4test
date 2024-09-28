import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";


@Entity("products")
class Product {

    @PrimaryGeneratedColumn()
    code?: number;

    @Column()
    status!: string;

    @CreateDateColumn()
    imported_t!: Date;

    @Column()
    url!: string;

    @Column()
    creator!: string;

    @Column()
    created_t!: number;

    @Column()
    last_modified_t!: number;

    @Column()
    product_name!: string;

    @Column()
    quantity!: string;

    @Column()
    brands!: string;

    @Column()
    categories!: string;

    @Column()
    labels!: string;

    @Column()
    cities!: string;

    @Column()
    purchase_places!: string;

    @Column()
    stores!: string;

    @Column()
    ingredients_text!: string;

    @Column()
    traces!: string;

    @Column()
    serving_size!: string;

    @Column('decimal', { precision: 6, scale: 2 })
    serving_quantity!: number;

    @Column()
    nutriscore_score!: number;

    @Column()
    nutriscore_grade!: string;

    @Column()
    main_category!: string;

    @Column()
    image_url!: string;
    
}

export { Product };