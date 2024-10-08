import { Component, OnInit } from '@angular/core';
import { BiographyProfile, languagetype } from './models/biographyprofile';
import { BiosService } from './service/bios.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-bios',
  templateUrl: './bios.component.html',
  styleUrls: ['./bios.component.scss']
})
export class BiosComponent implements OnInit {
  biographylist: BiographyProfile[];
  fullBiographylist: BiographyProfile[];
  selectedLanguageType: languagetype;
  constructor(private biosservice: BiosService) { }

  ngOnInit(): void {
    this.selectedLanguageType = languagetype.ENG;
    this.biosservice.getallbios().subscribe(data => {
      this.fullBiographylist= data.sort(function(a, b){
        const aLastName = a.fullname.split(' ').pop().toLowerCase();
        const bLastName = b.fullname.split(' ').pop().toLowerCase();
        if(aLastName < bLastName) { return -1; }
        if(aLastName > bLastName) { return 1; }
        return 0;
    });
      this.updatedataBylanguage();
    });
  }
  onLanguageChange(value) {
    this.selectedLanguageType = (value == languagetype.ENG)? languagetype.ENG : languagetype.SP;
    this.updatedataBylanguage();
  }
  updatedataBylanguage(){
    this.biographylist = this.fullBiographylist.filter(x=>x.languagetype == this.selectedLanguageType);
  }
}
