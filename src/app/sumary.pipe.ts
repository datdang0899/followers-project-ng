import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sumary' })
export class SumaryPipe implements PipeTransform {
    transform(value: any, limit?: number) {
        if(!value) return null ; 

        let actualLimit = limit ? limit : 50 ; 
        return (value as string).substring(0,actualLimit) + "..." ; 

    }
}
