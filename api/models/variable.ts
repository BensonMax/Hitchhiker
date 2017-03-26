import * as shortid from 'shortid';
import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Environment } from "./environment";

@Entity()
export class Variable {
    @PrimaryColumn()
    id: string;

    @Column()
    key: string;

    @Column()
    value: string;

    @Column()
    isActive: boolean;

    @Column()
    sort: number;

    @ManyToOne(type => Environment, env => env.variables)
    environment: Environment;

    constructor(key: string, value: string, isActive: boolean, sort: number, env: Environment) {
        this.id = shortid.generate();
        this.key = key;
        this.value = value;
        this.isActive = isActive;
        this.sort = sort;
        this.environment = env;
    }
}