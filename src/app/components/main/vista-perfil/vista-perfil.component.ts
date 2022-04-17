import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../../../services/pokemon.service';

@Component({
  selector: 'app-vista-perfil',
  templateUrl: './vista-perfil.component.html',
  styleUrls: ['./vista-perfil.component.css'],
  providers: [PokemonService]
})
export class VistaPerfilComponent implements OnInit {

  constructor(
    private PokemonService: PokemonService
  ) { 
  }

  ngOnInit(): void {
    this.PokemonService.getPokemons().subscribe(
      response => {
      console.log(response);
    });
  }
 

}
