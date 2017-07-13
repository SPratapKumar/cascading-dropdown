import { Component, OnInit } from '@angular/core';
import { Countries } from '../shared/models/countries.data';
import { Country } from '../shared/models/country';
import { State } from '../shared/models/state';
import { States } from '../shared/models/states.data';

//import * as data from 'text!../shared/models/countriesList.data.json';

//var xyz = require ("../shared/models/countries.data");

@Component({
  selector: 'app-cascading-dropdown',
  templateUrl: './cascading-dropdown.component.html',
  styleUrls: ['./cascading-dropdown.component.css']
})
export class CascadingDropdownComponent implements OnInit {

  countryList: Country[];
  selectedCountry: number;

  stateList: State[];
  selectedState: number;

  constructor() { 
    this.countryList = Countries;
    //this.stateList = States;
    
  }

  getStatesforSelectedCountry(selectedCountryID){
    this.stateList = States.filter((item) => item.countryID == selectedCountryID);
  }
  
  ngOnInit() {
  }

}
