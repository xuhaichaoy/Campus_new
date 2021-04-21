import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createConnection } from "typeorm";
import { Repository } from 'typeorm';
import { CircleEntity } from '../../entity/circle.entity'

@Injectable()
export class CircleService {
    constructor(
        @InjectRepository(CircleEntity)
        private articleRepository: Repository<CircleEntity>,
    ) {}

    async getHello() {
        return await this.articleRepository.find();
    }

    getHello1(): string {
        return 'Hello World!111111111111111111';
    }
}
