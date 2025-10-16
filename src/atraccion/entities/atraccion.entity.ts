import { Entity } from 'typeorm';
import { LugaresTuristicos } from '../../lugares-turisticos/entities/lugares-turistico.entity';

@Entity({ name: 'atracciones' })
export class Atraccion extends LugaresTuristicos {
  mostrarTipo(): void {
    console.log(`🎡 Atracción turística: ${this.nombre_lugar}`);
  }
}
