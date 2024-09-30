import { CommonModule } from '@angular/common';
import { Component, Input,  } from '@angular/core';
import { Parking } from '../../Models/Parking';

@Component({
  selector: 'app-parking-spot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parking-spot.component.html',
  styleUrl: './parking-spot.component.css'
})
export class ParkingSpotComponent {

  @Input() parkingSpots: Parking[] = []; 

}