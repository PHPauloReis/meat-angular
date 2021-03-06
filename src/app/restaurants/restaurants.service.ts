import { Restaurant } from './restaurant.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class RestaurantsService {
    public constructor(private http: Http) { }

    public getAllRestaurants(): Observable<Restaurant[]> {
        return this.http.get(MEAT_API + '/restaurants')
            .map(response => response.json())
            .catch(ErrorHandler.handlerError);
    }

    public getRestaurantById(id: string): Observable<Restaurant> {
        return this.http.get(MEAT_API + '/restaurants/' + id)
            .map(response => response.json())
            .catch(ErrorHandler.handlerError);
    }
}
