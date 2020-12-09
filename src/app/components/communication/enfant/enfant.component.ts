import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/model/Personne.model';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  @Input()
  personne: Personne;

  @Input()
  index: number;

  @Output()
  delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.delete.emit( this.index );
  }

}
