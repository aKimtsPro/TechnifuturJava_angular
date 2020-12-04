import { ClassField } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Personne } from './Personne.model';

@Component({
  selector: 'app-exo-recap',
  templateUrl: './exo-recap.component.html',
  styleUrls: ['./exo-recap.component.css']
})
export class ExoRecapComponent implements OnInit {

  fullList: Array<Personne> = [
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
  ]
  filteredList: Array<Personne> = []; 

  filterInput: string = "";

  form: FormGroup;
  date: Date = new Date();

  constructor(private builder: FormBuilder, private router: Router) {
    this.fullList.forEach( e => this.filteredList.push(e) );

    this.form = builder.group({
      nom: new FormControl("",[Validators.required, Validators.minLength(3)]),
      age: new FormControl(0,[Validators.required, Validators.max(119), Validators.min(0)]),
      ville: new FormControl("",[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onFilter(){

    this.filteredList = []

    for(const personne of this.fullList){
      if(personne.nom.toLowerCase().startsWith(this.filterInput.toLowerCase()))
        this.filteredList.push(personne);
    }
  }

  onSubmit(){
    if(this.form.valid)
    {
      this.fullList.push(this.form.value)
      this.onFilter();
    }
    else
    {
      alert("Vous allez quitter cette partie du site");

      console.log(this.router.url);
      this.router.navigateByUrl("/demo");
      this.router.navigate([`${"de"+"mo"}`,]);
      // this.router.navigateByUrl('/truc//machin');
      // this.router.navigate( ['truc', 'muche', 'machin']);
    }
  }

  event(event: KeyboardEvent){
    if(event.key === "Enter")
      this.onFilter();
  }

}
