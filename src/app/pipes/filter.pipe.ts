import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restuarantslist: any[], filterString: String, propName: any): any[] {
    const result: any = []
    if (!restuarantslist || filterString == '' || propName == '') {
      return restuarantslist
    }

    restuarantslist.forEach((restuarant: any) => {
      if (restuarant[propName].trim().toLowerCase().includes(filterString.toLowerCase())) {
        result.push(restuarant)
      }
    })
    return result
  }
}
