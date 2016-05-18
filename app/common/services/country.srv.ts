import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Country} from '../models/country';
import {ICountry} from '../models/icountry';

@Injectable()
export class CountryService {

    constructor(private http:Http) {

    }

    getCountries() {
        return new Observable(observable => {
            this.http.get("https://restcountries.eu/rest/v1/all")
                .map(function(res) {
                    res =res.json();
                    var countries:Array<ICountry> = [];
                    res.forEach(data => {
                        countries.push(new Country(data.name, data.alpha2Code));
                    });
                    return countries;
                })
                .subscribe(countries => {
                    observable.next(countries);
                });
        });
    }
}
