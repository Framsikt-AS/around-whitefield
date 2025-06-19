import { Component, OnInit } from '@angular/core';

interface Place {
  id: number;
  name: string;
  type: string;
  address: string;
  image: string;
  rating: number;
  description: string;
}

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  places: Place[] = [];
  filteredPlaces: Place[] = [];
  filterType: string = 'all';
  
  ngOnInit(): void {
    // In a real app, this would come from a service
    this.places = [
      {
        id: 1,
        name: 'Phoenix Marketcity',
        type: 'shopping',
        address: 'Whitefield Main Road, Mahadevapura',
        image: 'assets/placeholder-1.jpg',
        rating: 4.5,
        description: 'One of the largest shopping malls in Bangalore with international brands, restaurants, and entertainment.'
      },
      {
        id: 2,
        name: 'VR Bengaluru',
        type: 'shopping',
        address: 'Whitefield Main Road, Whitefield',
        image: 'assets/placeholder-2.jpg',
        rating: 4.3,
        description: 'A mixed-use development with shopping, dining, hospitality, and co-working spaces.'
      },
      {
        id: 3,
        name: 'The Whitefield Arms',
        type: 'dining',
        address: 'Whitefield Main Road, Near ITPB',
        image: 'assets/placeholder-3.jpg',
        rating: 4.2,
        description: 'A British-style pub with outdoor seating, offering a wide selection of drinks and food.'
      },
      {
        id: 4,
        name: 'EPIP Zone Park',
        type: 'recreation',
        address: 'EPIP Zone, Whitefield',
        image: 'assets/placeholder-4.jpg',
        rating: 4.0,
        description: 'A serene park in the heart of the tech corridor, perfect for morning walks and relaxation.'
      },
      {
        id: 5,
        name: 'Windmills Craftworks',
        type: 'dining',
        address: 'EPIP Zone, Whitefield',
        image: 'assets/placeholder-5.jpg',
        rating: 4.7,
        description: 'A microbrewery with a jazz theater and library, offering craft beers and gourmet food.'
      },
      {
        id: 6,
        name: 'Nallurhalli Lake',
        type: 'recreation',
        address: 'Nallurhalli, Whitefield',
        image: 'assets/placeholder-6.jpg',
        rating: 3.8,
        description: 'A restored lake with a walking path, perfect for birdwatching and evening strolls.'
      }
    ];
    
    this.filteredPlaces = [...this.places];
  }
  
  filterPlaces(type: string): void {
    this.filterType = type;
    if (type === 'all') {
      this.filteredPlaces = [...this.places];
    } else {
      this.filteredPlaces = this.places.filter(place => place.type === type);
    }
  }
}
