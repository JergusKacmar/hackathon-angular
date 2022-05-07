// import { Component, OnInit } from '@angular/core';
// import * as L from 'leaflet'

// @Component({
//   selector: 'app-map',
//   templateUrl: './map.component.html',
//   styleUrls: ['./map.component.scss']
// })
// export class MapComponent implements OnInit {
//   constructor() { }

//   ngOnInit(): void { }
// }

import { Component, AfterViewInit, Input } from '@angular/core';
import {featureGroup, latLng, tileLayer, polygon, marker, Icon, LatLngBounds} from 'leaflet';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  constructor() { }

  

  private map;

  
 
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 48.71365, 21.25663 ],
      zoom: 17
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19.9,
      minZoom: 7,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    
    const icon = {
      icon: L.icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 0 ],
        // specify the path here
        iconUrl: './assets/images/marker-icon.png',
        shadowUrl: './assets/images/marker-shadow.png'
     })
  };
  // const marker_current = L.marker([48.71365, 21.25663], icon).addTo(this.map)
  // .bindPopup('Your Location<br> Kasárne/Kulturpark').openPopup();
  // const marker_1 = L.marker([48.71365, 38.25663], icon).addTo(this.map)
  // .bindPopup('Job 1<br> -address-').openPopup();
  const marker1 = marker([48.71365, 21.25663], icon).bindPopup('Your Location<br> Kasárne/Kulturpark').openPopup();
  const marker2 = marker([48.71365, 21.2], icon).bindPopup('Job 1<br> __address__').openPopup();
  const group = featureGroup([marker1, marker2]);

  group.addTo(this.map);
  // marker_current.addTo(this.map);
  // marker_1.addTo(this.map);
  tiles.addTo(this.map);

  }

  

  ngAfterViewInit(): void {
    this.initMap();
  }
}