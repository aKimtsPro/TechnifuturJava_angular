import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Post } from 'src/app/model/Post.model';
import { ApiConsumerService } from 'src/app/service/apiConsumer.service';

@Component({
  selector: 'app-demo-recap',
  templateUrl: './demo-recap.component.html',
  styleUrls: ['./demo-recap.component.css']
})
export class DemoRecapComponent implements OnInit {

  title: string = 'technifuturJavaDemo';
  formulaire: FormGroup;
  a: number = 5;
  b: number = 5;

  borderedHeader: boolean = true;
  id: string = "monId"; 
  labelColor: string = "red";
  showLabel: boolean = true;

  postTab: Post[] = [];
 
  constructor(private formBuilder: FormBuilder, private service: ApiConsumerService) {

    this.formulaire = formBuilder.group({
      nom: new FormControl("", [ Validators.required, Validators.minLength(3) ]),
      prenom: new FormControl("", [Validators.required]),
      tel: new FormControl("", [Validators.required]),
      value: new FormControl(1)
    })
  }
  
  ngOnInit(): void {

    this.service.getPosts().subscribe((ele) => {
      this.postTab.push(ele);
    })

  }

  onSubmit(){
    
    const form = this.formulaire;
    if(form.valid)
    {
      console.log( this.formulaire.value );
      from(this.postTab).pipe(filter( ele => ele.id == this.formulaire.value.value))
        .subscribe(
          console.log,
          alert,
          () => console.log("completed"));

    }
    else if(!form.controls.tel.valid)
      alert("please input tel")

    
  }

}
