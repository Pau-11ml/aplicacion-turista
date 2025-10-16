import { Injectable } from '@nestjs/common';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';

@Injectable()
export class RestauranteService {
  create(createRestauranteDto: CreateRestauranteDto) {
    return 'This action adds a new restaurante';
  }

  findAll() {
    return `This action returns all restaurante`;
  }

  findOne(string) {
    return `This action returns a #${id} restaurante`;
  }

  update(string, updateRestauranteDto: UpdateRestauranteDto) {
    return `This action updates a #${id} restaurante`;
  }

  remove(string) {
    return `This action removes a #${id} restaurante`;
  }
}
