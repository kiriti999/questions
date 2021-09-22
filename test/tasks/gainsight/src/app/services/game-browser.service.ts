import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameBrowserService {
  apiURL = 'http://starlord.hackerearth.com/gamesarena';

  constructor(private httpClient: HttpClient) { }

  public getGameData() {
    return this.httpClient.get<[]>(`${this.apiURL}`);
  }
}
