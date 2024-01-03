import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterQueryFactoryService {
  constructor() {}

  generateQueryString(formValue: any): string {
    const queryParams: string[] = [];

    if (formValue.search) {
      queryParams.push(`search=${formValue.search}`);
    }
    if (formValue.type && formValue.type !== 'All') {
      queryParams.push(`type=${formValue.type}`);
    }
    if (formValue.fee && formValue.fee !== '') {
      queryParams.push(`fee=${formValue.fee}`);
    }
    if (formValue.city && formValue.city !== '') {
      queryParams.push(`city=${formValue.city}`);
    }

    return queryParams.join('&');
  }
}
