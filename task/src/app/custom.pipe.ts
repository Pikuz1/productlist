import {  Pipe, PipeTransform } from '@angular/core';
import{Products} from './models/items';
@Pipe({
 name: 'searchfilter'
})

export class SearchFilterPipe implements PipeTransform {
    transform(value: Products[], filterby: string): Products[] {
        if(!value){
            return [];
        } 
        if(!filterby){
            return value;
        } 
    filterby = filterby.toLocaleLowerCase();
    return filterby? value.filter((pro:Products) => pro.title.toLocaleLowerCase().includes
    (filterby)): value;
        
       }
}