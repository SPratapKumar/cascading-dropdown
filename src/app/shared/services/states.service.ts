import { Injectable } from '@angular/core';
import { States } from '../../shared/models/states.data';
import { State } from '../../shared/models/state';

@Injectable()
export class StatesService {
  stateList: State[];

  constructor() { 

  }

  getStates(){
    this.stateList = States;
    return this.stateList;
  }

  getStatesforSelectedCountry(selectedCountryID) {
    this.stateList = States.filter((item) => item.countryID == selectedCountryID); console.log('2' + this.stateList);
    return this.stateList;
  }

}
