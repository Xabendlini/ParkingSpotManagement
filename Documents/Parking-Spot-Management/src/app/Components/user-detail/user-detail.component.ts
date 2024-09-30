import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef, Input } from '@angular/core';
import { User } from '../../Models/User';
import { FormsModule } from '@angular/forms';
import { ParkingService } from '../parking.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  user: User = {
    name: '',
    surname: '',
    email: '',
    car: { licensePlate: '', model: '', make: '', color: '' }
  };
  selectedParkingSpot: string = '';
  @Input() parkingSpots: any; 

  constructor(private parkingService: ParkingService, private cdRef: ChangeDetectorRef) { } 

  onSubmit() {
    const selectedSpot = this.parkingSpots.find((spot: { id: string; }) => spot.id === this.selectedParkingSpot);

    if (selectedSpot && selectedSpot.available) {
      
      this.parkingService.updateParkingSpotAvailability(this.selectedParkingSpot, false);

      this.user = {
        name: '',
        surname: '',
        email: '',
        car: { licensePlate: '', model: '', make: '', color: '' }
      };
      this.selectedParkingSpot = ''; 

      console.log('User details saved:', this.user);
      console.log('Parking spot reserved:', this.selectedParkingSpot);
    } else {
      alert('The selected parking spot is unavailable. Please choose another spot.');
    }
  }
}