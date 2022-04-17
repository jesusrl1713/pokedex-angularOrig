import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  constructor(private http: HttpClient) { }
  //Obtiene pokemon
  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/');
  }
  getPokemonsData(id: any){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+id);
  }
}