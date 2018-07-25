import { Injectable } from '@angular/core';
configUrl = 'assets/config.json';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(this.configUrl);
  }
  
}

