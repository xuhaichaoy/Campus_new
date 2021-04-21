import { Injectable } from '@nestjs/common';
import { createConnection } from "typeorm";
import {CircleEntity} from '../entity/circle.entity'

@Injectable()
export class CircleService {
  getHello(): any {
    // const user = await getConnection()
    //     .createQueryBuilder()
    //     .select("user")
    //     .from(User, "user")
    //     .where("user.id = :id", { id: 1 })
    //     .getOne();
  

    // photo.name = "Me and Bears";
    // photo.description = "I am near polar bears";
    // photo.filename = "photo-with-bears.jpg";
    // photo.views = 1;
    // photo.isPublished = true;

    // return 

   
  }

  getHello1(): string {
    return 'Hello World!111111111111111111';
  }
}
