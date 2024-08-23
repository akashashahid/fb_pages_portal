import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
* This injector provides the translate service throughout the application.
*/
@Injectable({
  providedIn: 'root'
})

export class TranslateService {
  /**
  *  This property contains the translations object.
  */
  data: any = {};
  /**
  * The constructor initializes the HttpClient service in the application.
  */
  constructor(private http: HttpClient) { }
  /**
   * This method initiates the file download and language switch.
   *
   * @param  lang
   * @method use
   * @return
   */
  use(lang: string): Promise<{}> {
    console.log('s');

    return new Promise<{}>((resolve, reject) => {
      const langPath = `assets/i18n/${lang || 'en'}.json`;
      console.log(langPath);

      this.http.get<{}>(langPath).subscribe(
        translation => {
          this.data = Object.assign({}, translation || {});
          console.log('fgdtS');
          resolve(this.data);
        },
        error => {
          this.data = {};
          console.log('dsf');

          resolve(this.data);
        }
      );
    });
  }
}
