import { Component, OnInit } from '@angular/core';
import { Pokemones } from 'src/app/models/pokemones/Pokemones';


@Component({
  selector: 'app-vista-princ',
  templateUrl: './vista-princ.component.html',
  styleUrls: ['./vista-princ.component.css']
})
export class VistaPrincComponent implements OnInit {

  public pokemones: Pokemones;


  constructor(
  ) { 
    this.pokemones = new Pokemones(0,"","","");
    this.pokemones.id = 1;
    this.pokemones.nombre = "Pikachu";
    this.pokemones.descripcion = "Es un Pokémon de tipo planta/veneno introducido en la primera generación. Es uno de los Pokémon iniciales que pueden elegir los entrenadores que empiezan su aventura en la región Kanto, junto a Squirtle y Charmander (excepto en Pokémon Amarillo). Destaca por ser el primer Pokémon de la Pokédex Nacional y la en la Pokédex de Kanto.";


  }

  ngOnInit(): void {
  }

  public infoPokemon(pokemones:Pokemones){
    
    
  }

}
