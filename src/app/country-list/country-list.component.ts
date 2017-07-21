import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../shared/services/countries.service';
import { StatesService } from '../shared/services/states.service';
import { SelectedCountry, CountryStateService } from '../shared/services/country-state.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
  providers: [CountriesService, CountryStateService]
})
export class CountryListComponent implements OnInit {

  countryList;
  selectedCountry: number;

  stateList;
  selectedState: number;
  selectedCountryID: SelectedCountry;

  constructor(private countryService: CountriesService, private csService: CountryStateService
     ) {
    this.countryList = countryService.getAllCountries();
    // console.log(this.countryList);
  
  // this.selectedCountryID = csService.data;
  // console.log(csService.data.selectedCountryID);
   }


    getStatesByCountry(countryID: number) {
    //   console.log('hi');
    //   console.log(countryID);
    //    ;
    //    // this.csService.selectedCC = this.selectedCountry
    // // this.selectedCountryID.selectedCountryID = countryID;
    // //let sService: StatesService;
    // console.log(this.csService);
    // this.csService.data.selectedCountryCode = countryID;
    // // this.selectedCountryID.selectedCountryCode = countryID;
    // //console.log(this.selectedCountryID.selectedCountryCode);
    // this.csService.setSelectedCountryID(countryID);
    // console.log(this.csService.getselectedCountryID());
    // // let csv: SelectedCountry;
    // // console.log(csv.selectedCountryID);
    // //console.log(csv.getCountryID());
    // // this.stateList = sService.getStatesforSelectedCountry(this.selectedCountryID); console.log(this.stateList);
    // // return this.stateList;

    this.csService.selectedCC = 'asd';
  }   



  ngOnInit() {
  }

}
