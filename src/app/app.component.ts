import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title: string = 'technifuturJavaDemo';
  formulaire: FormGroup;
  a: number = 5;
  b: number = 5;

  borderedHeader: boolean = true;
  id: string = "monId"; 
  labelColor: string = "red";
  showLabel: boolean = true;
 
  constructor(private formBuilder: FormBuilder) {

    this.formulaire = formBuilder.group({
      nom: new FormControl("", [ Validators.required, Validators.minLength(3) ]),
      prenom: new FormControl("", [Validators.required]),
      tel: new FormControl("", [Validators.required])
    })

    console.log(this.formulaire);
  }

  onSubmit(){
    
    const form = this.formulaire;
    if(form.valid)
      console.log( this.formulaire.value );
    else if(!form.controls.tel.valid)
      alert("please input tel")
    
  }

}
