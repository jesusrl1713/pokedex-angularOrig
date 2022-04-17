import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../../../services/pokemon.service';
@Component({
  selector: 'app-vista-princ',
  templateUrl: './vista-princ.component.html',
  styleUrls: ['./vista-princ.component.css'],
})

export class VistaPrincComponent implements OnInit {
  pageActual: number = 1;

   
  pokemons : any[] = [];
  constructor(
    private _PokemonService: PokemonService

  ) {   

  }

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon(){
    this._PokemonService.getPokemons().subscribe((response:any) =>{
      response.results.forEach(result => {
        this._PokemonService.getPokemonsData(result.name).subscribe((uniqResponse:any) => {
          this.pokemons.push(uniqResponse);
          console.log(this.pokemons);
        });
      });
   })
  }


}
