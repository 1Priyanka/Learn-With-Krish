
import { Column,Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';
// import { Entity } from 'typeorm/decorator/entity/Entity';
import { BaseEntity } from 'typeorm';

@Entity('student')
// extend the base entity -(why is this ) bz you don't have respository to save update and delete
export class Student extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string;
    firstName:string;
    @Column('string')
    lastName:string;
    @Column('string')
    address:string;
    @Column('string')
    department:string;

}