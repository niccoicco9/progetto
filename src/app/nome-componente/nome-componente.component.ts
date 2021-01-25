import { Component, OnInit } from '@angular/core';

const axios = require('axios')
@Component({
  selector: 'nxt-nome-componente',
  templateUrl: './nome-componente.component.html',
  styleUrls: ['./nome-componente.component.css']
})
export class NomeComponenteComponent implements OnInit {
  utenti: any;

  constructor() {


  }

  ngOnInit() {
    var _this = this
    axios.get('https://randomuser.me/api/?results=100')
      .then(function (response: any) {
        _this.utenti = response.data.results
        console.log(_this.utenti)
      })
      .catch(function (error: any) {
        console.log(error)
      })

  }

}
