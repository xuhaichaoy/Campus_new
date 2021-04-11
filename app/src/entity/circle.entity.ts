import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

// 圈子表
// id 圈子id 圈子名 帖子 成员 简介 封面图 发帖人 创建时间 是否加入

@Entity('circle')
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
        name: 'ccid',
        comment: '圈子id',
    })
    ccid: string;
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
        name: 'circlename',
        comment: '圈子名称',
    })
    circlename: string;
    @Column('varchar', {
        nullable: false,
        unique: true,
        length: 100,
        name: 'circleimg',
        comment: '圈子封面',
    })
    circleimg: string;
    @Column('varchar', {
        nullable: false,
        unique: true,
        length: 100,
        name: 'circleshortimg',
        comment: '圈子缩略图',
    })
    circleshortimg: string;
    @Column('varchar', {
        nullable: false,
        unique: true,
        length: 100,
        name: 'circleintro',
        comment: '圈子简介',
    })
    circleintro: string;
    @Column('tinyint', {
        nullable: true,
        default: () => 0,
        name: 'is_join',
        comment: '是否加入',
    })
    isActive: number | null;
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