import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';


export class SelectedCountry{
  selectedCountryCode: number;

  // getCountryID(): number{
  //   return this.selectedCountryID;
  // }
  
}


@Injectable()
export class CountryStateService {
  data: SelectedCountry= {
      selectedCountryCode : 101
  }
  selectedCC = new Subject<any>(); 
  
constructor() {
}
  getselectedCountryID() {
    return this.data;
  }
  setSelectedCountryID(countryID) {
    console.log('hello');
    this.data.selectedCountryCode = countryID;
  }

  setselectedCC(): Observable<any> {
    return this.selectedCC.asObservable();
  }


}
