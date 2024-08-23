import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from 'src/app/services/translate/translate.service';
import * as _ from 'lodash';
/**
* This pipe exports translate service to be used in the application.
*/
@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  /**
  * This constructor initializes the TranslateService in the application.
  */
  constructor(private translate: TranslateService) {}
  /**
   * This method transles the given data through the translate service.
   *
   * @param  key
   * @return
   */
  transform(key: any): any {
    console.log(this.translate.data);
    return _.get(this.translate.data, key , key );
  }

}
