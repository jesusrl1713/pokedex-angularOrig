import { Component, Input, OnInit } from '@angular/core';
import {PokemonService} from '../../../services/pokemon.service';
import {VistaPrincComponent} from '../vista-princ/vista-princ.component';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-vista-detalle',
  templateUrl: './vista-detalle.component.html',
  styleUrls: ['./vista-detalle.component.css']
})
export class VistaDetalleComponent implements OnInit {
  @Input()vistaPrincComponent:VistaPrincComponent;
  public name: any;
  public id: any;

  constructor(private route:ActivatedRoute) {
    this.name = this.route.snapshot.params['name'];
    this.id = this.route.snapshot.params['id'];

   }

  ngOnInit(): void {
    this.getPokemon();
  }
  getPokemon(): void{
  }

  
}
