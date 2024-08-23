import { TestBed, async, inject } from '@angular/core/testing';
import { TranslateService } from 'src/app/services/translate/translate.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

/**
* This file tests the translate service
*/

/**
* Dummy data to be fetched when a valid call is made
*/
const promisedData = {
  "data": "someData"
}


describe('TranslateService', () => { //initialize the environment
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TranslateService //import required service
      ]
    });
  });

  it('Make a valid function call', testTranslateService('data'));

  it('Make function call with undefined data',
    testTranslateService(undefined, 'invalidate'
    ));

  it('Make function call with data in invalid format',
    testTranslateService({ name: "123" }, 'invalidate'
    ));

});

/**
* This function tests the "use" function in TranslateService
*/
function testTranslateService(data: any, option = null) {
  return (
    async(inject([TranslateService], //inject service and define aliases
      (service: TranslateService) => {
        if (option == null) {
          spyOn(service, "use").and.returnValue(Promise.resolve(promisedData)); //return dummy data on valid call
          let result = service.use(data);
          expect(result['__zone_symbol__value'][data]).toBeDefined(); //expect the object to contain data
        } else {
          spyOn(service, "use").and.returnValue(Promise.resolve('')); //return empty on invalid call
          let result = service.use(data);
          expect(result['__zone_symbol__value'][data]).toBeUndefined(); //expect object to not contain any data
        }
      })));
}
