import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipetest',
  templateUrl: './../view/pipetest.component.html',
  styleUrls: ['./../css/pipetest.component.less']
})
export class PipetestComponent implements OnInit {

  constructor() { }

  file_size: number = 2120109;

  ngOnInit() {
  }

}