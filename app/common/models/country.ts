import {ICountry} from './icountry';

export class Country implements  ICountry {

    constructor(public name:string, public alpha2Code:string) {

    }

}
