import { Component , OnInit, NgZone} from '@angular/core';
import { StatesService } from '../shared/services/states.service';
import { SelectedCountry, CountryStateService } from '../shared/services/country-state.service';
import { Observable , Subscription} from 'rxjs/Rx'


@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css'],
  providers: [StatesService, CountryStateService]
})
export class StateListComponent implements OnInit {

  stateList;
  selectedState: number;
  selectedCountry: SelectedCountry;
  SelectedCountryId : Subscription;
  
  constructor(private sService: StatesService,
              private csService: CountryStateService,
              private zone: NgZone) { 
    this.stateList = this.sService.getStates();
    // this.selectedCountry = this.csService.getselectedCountryID();  
    // console.log(this.selectedCountry);
  
      this.SelectedCountryId = this.csService.setselectedCC().subscribe((message) => { this.SelectedCountryId = message, 'new value' });
      console.log(this.SelectedCountryId);
  }
  ngOnInit() {
      this.stateList = this.getStatesByCountry(this.csService.data);
     // console.log(this.stateList, 'statelist');

  }
  ngDoCheck(){
    //console.log('testing', this.csService.data);
     // this.SelectedCountryId = this.csService.selectedCC;
    
  }

  getStatesByCountry(selectedCountryID) {
   console.log(this.csService.data);
    // console.log(selectedCountryID);
    // let sService: StatesService;
    // this.stateList = sService.getStatesforSelectedCountry(this.selectedCountry); console.log(this.stateList);
    // return this.stateList;
  }

  onclick() {

    console.log(this.SelectedCountryId, 'countryid');
  }


  

}
