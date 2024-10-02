import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Parking } from '../Models/Parking';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  private parkingSpotsSubject = new BehaviorSubject<Parking[]>([]);
  parkingSpots$: Observable<Parking[]> = this.parkingSpotsSubject.asObservable();
  parkingSpots: Parking[] = [];

  constructor() {
    this.initializeParkingSpots(); 
  }

  private initializeParkingSpots() {
    
    if (this.parkingSpots.length === 0) {
      const parkingSpots: Parking[] = [];
      for (let i = 1; i <= 20; i++) {
        parkingSpots.push({ id: `A${i}`, available: true });
      }
      this.parkingSpotsSubject.next(parkingSpots);
      this.parkingSpots = parkingSpots; 
    }
  }

  updateParkingSpotAvailability(parkingId: string, available: boolean) {
    const updatedParkingSpots = [...this.parkingSpotsSubject.getValue()];
    const spotIndex = updatedParkingSpots.findIndex(spot => spot.id === parkingId);
    if (spotIndex !== -1) {
      updatedParkingSpots[spotIndex].available = available;
      this.parkingSpotsSubject.next(updatedParkingSpots);
    }
  }
}