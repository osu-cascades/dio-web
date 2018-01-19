import {Component, OnInit} from '@angular/core';
import {DoService} from "./shared/do.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DoService]
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://vv-dio-service-staging.herokuapp.com/api/v1/do/readings')
      .subscribe((response) => console.log(response));
  }

  title = 'app';
}
