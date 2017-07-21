import { Injectable } from '@angular/core';
import { Country } from '../../shared/models/country';
import {Countries} from '../../shared/models/countries.data';

@Injectable()
export class CountriesService {
  countryList: Country[];
  
  constructor() { 
    
  }

  

  getAllCountries() {
    // console.log (this.countryList);
    this.countryList = Countries;
    return this.countryList;
  }

}
