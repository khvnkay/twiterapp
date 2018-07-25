import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor() { }
  config: Config;
  ngOnInit() {
  }
  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
          heroesUrl: data['heroesUrl'],
          textfile:  data['textfile']
      });
  }
}

export interface Config {
  heroesUrl: string;
  textfile: string;
}