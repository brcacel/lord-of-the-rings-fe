import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Character } from './models/character';
import { CharcterService } from './services/charcter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  characters: Character[] = [];
  selectedName: string = "";
  selectedGender: string = "";
  selectedRace: string = "";
  selectedHair: string = "";
  results: Character[] = [];
  title = 'Lord of The Rings';

  constructor(private characterService: CharcterService) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe(result => this.characters = result);
  }

  onNameSelected() {
    this.results = this.characters;
    if (this.selectedName) this.results = this.results.filter((item) => item.name === this.selectedName);
    if (this.selectedGender) this.results = this.results.filter((item) => item.gender === this.selectedGender);
    if (this.selectedHair) this.results = this.results.filter((item) => item.hair === this.selectedHair);
    if (this.selectedRace) this.results = this.results.filter((item) => item.race === this.selectedRace);
  }
}
