import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface IUsers {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  },
  picture: {
    large: string
  },
  location: {
    street: string;
    city: string;
    state: string;
    coordinates: {
      latitude: any;
      longitude: any;
    },
    timezone: {
      offset: string;
      description: string;
    }
  },
}

export class DataService {

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  public getUsers(): Observable<IUsers[]> {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
      .pipe(
        map((res: { results }) => res.results)
      );
  }
}
