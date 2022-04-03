import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-vista-perfil',
  templateUrl: './vista-perfil.component.html',
  styleUrls: ['./vista-perfil.component.css']
})
export class VistaPerfilComponent implements OnInit {

  id: number;
  informacion: string;
  nombre: string;
  contador: number;

  constructor() { 
    this.id = 1;
    this.informacion = "Luovouhvoueghoñuhvouñoxoub ouxfboñufbuuxf nnpfhpnfigbibpgdnnbi{gnbipndipbipn ipkgnbkpmipkfhipk mfpigm ikp{nbjdkngfpi{ ndkingpi{n";
    this.nombre = "Jesus Reyes Lara, 25 años";
    this.contador = 10;
  }

  ngOnInit(): void {
  }
  
  reset(){
    this.nombre = "";
  }

}
