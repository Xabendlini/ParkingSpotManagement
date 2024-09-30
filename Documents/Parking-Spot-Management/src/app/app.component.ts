import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetailComponent } from "./Components/user-detail/user-detail.component";
import { ParkingSpotComponent } from "./Components/parking-spot/parking-spot.component";

import { Parking } from './Models/Parking';
import { ParkingService } from './Components/parking.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  ParkingSpotComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parking-spot-management';

  parkingSpots: Parking[] = [];

  constructor(public parkingService: ParkingService) {
    this.initializeParkingSpots();
  }

  private initializeParkingSpots() {
    for (let i = 1; i <= 20; i++) {
      this.parkingSpots.push({ id: `A${i}`, available: true });
    }
  }
}