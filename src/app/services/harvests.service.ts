import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HarvestsService {
  harvestCreated = new Subject<Harvest>();

  constructor(private http: HttpClient) {
  }

  getHarvestList() {
    return this.http.get<Harvest[]>('http://localhost:3000/api/v1/harvests');
  }

  createHarvest() {
    return this.http.post<Harvest>('http://localhost:3000/api/v1/harvests', {});
  }

}

export class Harvest {
  name: string;
  startDate?: string;
  endDate?: string;
}
