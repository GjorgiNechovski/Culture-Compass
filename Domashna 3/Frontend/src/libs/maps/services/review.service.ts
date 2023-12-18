import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadNewReview } from '../models/review.models';
import { appApi } from 'src/app/const-variables.models';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  addReview(review: UploadNewReview): Observable<void> {
    const data = new FormData();
    data.append('comment', review.comment);
    data.append('rating', review.rating);
    data.append('placeId', review.placeId);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post<void>(appApi + '/places/addLocation', data, {
      headers,
    });
  }

  deleteReview(placeId: string, reviewId: string): Observable<void> {
    return this.http.delete<void>(
      appApi + `reviews/place/${placeId}/review/${reviewId}`
    );
  }
}
