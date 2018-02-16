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
    return this.http.get<Harvest[]>('https://vv-dio-service-staging.herokuapp.com/api/v1/harvests');
  }

  createHarvest() {
    return this.http.post<Harvest>('https://vv-dio-service-staging.herokuapp.com/api/v1/harvests', {});
  }

  getHarvest(harvestId: number) {
    return this.http.get<Harvest>(`https://vv-dio-service-staging.herokuapp.com/api/v1/harvests/${harvestId}`);
  }

  deleteHarvest(harvestId: number) {
    return this.http.delete(`https://vv-dio-service-staging.herokuapp.com/api/v1/harvests/${harvestId}`);
  }

}

export class Harvest {
  id: number;
  name: string;
  startDate?: string;
  endDate?: string;
}
