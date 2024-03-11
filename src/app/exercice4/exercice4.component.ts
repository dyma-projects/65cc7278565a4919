import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css']
})
export class Exercice4Component {
  public texts: Array<{nom: string, prenom:string, age: number   }> = [
    {
      nom: "Dupont",
      prenom:"Jean",
      age: 35
    },
    {
      nom: "Rousseau",
      prenom: "Sophie",
      age:18
    },
    {
      nom: "Lefebvre",
      prenom:"Hélène",
      age:27
    }
  ];
}
