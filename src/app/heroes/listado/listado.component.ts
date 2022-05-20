import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','IronMan','Hulk','Thor','Capitán América']
  heroeBorrado: string = '';

  borrarHeroe() {
    //const heroeBorrado = this.heroes.shift();
    //console.log(heroeBorrado)
    this.heroeBorrado = this.heroes.shift() || '';
    
  }

}
