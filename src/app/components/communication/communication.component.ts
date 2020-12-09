import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/Personne.model';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  personList: Personne[] = [
    {
      nom: "Louis",
      age: 15,
      ville: "biduleVille"
    },
    {
      nom: "Samuel",
      age: 50,
      ville: "TrucCity"
    },
    {
      nom: "Samira",
      age: 27,
      ville: "Machain"
    },
    {
      nom: "Dominique",
      age: 2,
      ville: "CakeShoz"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(index: number){
    this.personList.splice(index, 1);
  }

}
