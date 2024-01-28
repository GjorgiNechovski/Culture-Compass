import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { PlacesFacade } from '../../state/map-state.facade';
import { AuthenticationService } from 'src/libs/authentication/services/authentication.service';
import { Router } from '@angular/router';
import { FilterQueryFactoryService } from '../../services/filter-query-factory.service';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.css'],
})
export class FilterComponentComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    search: new FormControl<string>(''),
    type: new FormControl(),
    fee: new FormControl(),
    city: new FormControl(),
  });

  cities: string[] = [];

  showButtons = false;
  filtersActive = false;
  selectedFilter = 'All';

  constructor(
    private placesFacade: PlacesFacade,
    private authService: AuthenticationService,
    private filterQueryFactoryService: FilterQueryFactoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchForm.valueChanges
      .pipe(debounceTime(400))
      .subscribe((formValue) => {
        console.log(formValue);

        const queryString =
          this.filterQueryFactoryService.generateQueryString(formValue);
        this.placesFacade.fetchPlaces(queryString);
      });

    this.placesFacade.getCities().subscribe((x) => (this.cities = x));
  }

  showFilters(): void {
    this.showButtons = !this.showButtons;
    this.filtersActive = !this.filtersActive;
  }

  toggleFilters(filter: string): void {
    if (filter !== this.selectedFilter) {
      this.selectedFilter = filter;
      this.showButtons = true;
      this.searchForm.controls['type'].setValue(filter);
    } else {
      this.selectedFilter = 'All';
      this.showButtons = false;
      this.searchForm.controls['type'].setValue(filter);
    }
  }

  goToLocationList(): void {
    this.router.navigate(['/locationList']);
  }

  goToAddLocation(): void {
    this.router.navigate(['/addPlace']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout();
  }
}
