import { Component, OnInit } from '@angular/core';
import { PlacesFacade } from 'src/libs/maps/state/map-state.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Frontend';

  constructor(private placesFacade: PlacesFacade) {}

  ngOnInit(): void {
    this.placesFacade.fetchPlaces();
  }
}
