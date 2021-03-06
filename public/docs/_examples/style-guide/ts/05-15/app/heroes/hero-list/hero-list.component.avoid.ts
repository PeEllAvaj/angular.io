// #docregion
/* avoid */

import { OnInit } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Hero } from '../shared/hero.model';

const heroesUrl = 'http://angular.io';

export class HeroListComponent implements OnInit {
  heroes: Hero[];
  constructor(private http: Http) {}
  getHeroes() {
    this.heroes = [];
    this.http.get(heroesUrl)
      .map((response: Response) => <Hero[]>response.json().data)
      .catch(this.catchBadResponse)
      .finally(() => this.hideSpinner())
      .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }

  private catchBadResponse(err: any, source: Observable<any>) {
    // log and handle the exception
    return new Observable();
  }

  private hideSpinner() {
    // hide the spinner
  }
}
