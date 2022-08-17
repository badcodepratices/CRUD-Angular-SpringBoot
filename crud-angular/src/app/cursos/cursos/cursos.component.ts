import { Curso } from './../modelo/curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Curso[]=[ { _id: "1", nome: 'Angular', categoria: 'Front-end' } ];
  displayedColumns = ['nome','categoria'];


  constructor() {

  }

  ngOnInit(): void {
  }

}
