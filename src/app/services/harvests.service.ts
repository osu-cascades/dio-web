import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HarvestsService {
  harvestCreated = new Subject<Harvest>();
  harvestRemoved = new Subject<Harvest>();

  constructor(private http: HttpClient) {
  }

  getHarvestList() {
    return this.http.get<Harvest[]>('http://localhost:3000/api/v1/harvests');
  }

  createHarvest() {
    return this.http.post<Harvest>('http://localhost:3000/api/v1/harvests', {});
  }

  getHarvest(harvestId: number) {
    return this.http.get<Harvest>(`http://localhost:3000/api/vi/harvests/${harvestId}`);
  }

  deleteHarvest(harvestId: number) {
    return this.http.delete(`http://localhost:3000/api/v1/harvests/${harvestId}`);
  }

}

export class Harvest {
  id: number;
  name: string;
  startDate?: string;
  endDate?: string;
}
