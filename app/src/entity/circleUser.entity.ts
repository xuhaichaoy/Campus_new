
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

// 圈子成员表
// 

@Entity('circleUser')
export class UserEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        comment: '主键id',
    })
    id: number;
    @Column('varchar', {
        nullable: false,
        unique: true,
        length: 150,
        name: 'uuid',
        generated: 'uuid',
        comment: 'uuid',
    })
    uuid: string;
    @Column('varchar', {
        nullable: false,
        unique: true,
        length: 100,
        name: 'name',
        comment: '昵称',
    })
    nickname: string;
    @Column('tinyint', {
        nullable: true,
        default: () => 1,
        name: 'is_active',
        comment: '是否活跃',
    })
    isActive: number | null;
    @Column('varchar', {
        nullable: true,
        length: 11,
        name: 'mobile',
        comment: '手机号码',
    })
    mobile: string | null;
    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'email',
        comment: 'email',
    })
    email: string | null;
    @Column('varchar', {
        nullable: true,
        name: 'shortintro',
        comment: '短简介',
    })
    shortintro: string;
    @Column({
        nullable: true,
        name: 'longintro',
        comment: '长简介',
    })
    longintro: string;
    @Column('varchar', {
        nullable: true,
        comment: '头像',
    })
    avater: string;
    @Column('tinyint', {
        nullable: true,
        default: () => 0,
        comment: '性别',
        name: 'gender',
    })
    gender: number | null;
    @Column('varchar', {
        nullable: false,
        comment: '用户名',
    })
    username: string;
    @Column('varchar', {
        nullable: false,
        comment: '密码',
    })
    password: string;
    @Column('varchar', {
        nullable: true,
        comment: '学校',
    })
    school: string;
    @Column('enum', {
        nullable: false,
        default: 0,
        enum: [0, 1, 2],
        comment: '用户身份，0用户，1管理员，2超级管理员',
    })
    status: number;
    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
        comment: '创建时间',
    })
    createdAt: Date;
    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
        comment: '最后更新时间',
    })
    updatedAt: Date;
    @DeleteDateColumn({
        type: 'timestamp',
        name: 'delete_at',
        comment: '删除',
    })
    deleteAt: Date;
}