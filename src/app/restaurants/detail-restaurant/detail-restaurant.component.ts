import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-detail-restaurant',
  templateUrl: './detail-restaurant.component.html',
  styleUrls: ['./detail-restaurant.component.css']
})
export class DetailRestaurantComponent implements OnInit {

  public restaurant: Restaurant;

  constructor(private restaurantsService: RestaurantsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.getRestaurantById(this.activatedRoute.snapshot.params['id'])
        .subscribe(restaurant => this.restaurant = restaurant);
  }

}
