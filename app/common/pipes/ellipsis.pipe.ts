import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name : 'ellipsis'
})
export class EllipsisPipe implements PipeTransform{

    transform(value:string, args:any[]):any {

        if (value && args.length > 0 && value.length > <number>args[0]) {
            return value.substring(0, args[0]) + "...";
        }

        return value;
    }

}
