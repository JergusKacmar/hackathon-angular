import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { JobService } from 'src/app/shared/services/jobs.service';
import { Job } from 'src/app/shared/services/job';
import * as L from 'leaflet';
import { map } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [JobService],
})
export class MapComponent implements AfterViewInit {
  constructor(public authService: AuthService, public jobService: JobService) {}

  jobs?: Job[];
  private mapicka;
  markerArray: Array<any>;

  private initMap(): void {
    this.retrieveJobs();
    this.mapicka = L.map('map', {
      center: [48.71365, 21.25663],
      zoom: 17,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19.9,
        minZoom: 7,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    const icon = {
      icon: L.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 0],
        // specify the path here
        iconUrl: './assets/images/marker-icon.png',
        shadowUrl: './assets/images/marker-shadow.png',
      }),
    };
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  retrieveJobs(): void {
    this.jobService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((data: any) => {
        this.jobs = data;

        const tiles = L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 19.9,
            minZoom: 7,
            attribution:
              '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          }
        );

        const icon = {
          icon: L.icon({
            iconSize: [25, 41],
            iconAnchor: [13, 0],
            iconUrl: './assets/images/marker-icon.png',
            shadowUrl: './assets/images/marker-shadow.png',
          }),
        };

        data.forEach((job) => {
          if (job.geoLat && job.geoLon) {
            L.marker([job.geoLat, job.geoLon], icon)
              .bindPopup(job.title)
              .addTo(this.mapicka);
          }
        });

        L.marker([48.71365, 21.25663], icon)
          .bindPopup('You are here')
          .addTo(this.mapicka);

        tiles.addTo(this.mapicka);
      });
  }
}
