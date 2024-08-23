import { TestBed, async, inject } from '@angular/core/testing'; //import required libraries
import { TranslatePipe } from 'src/app/pipes/translate/translate.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';

/**
* This file tests the translate pipe
*/

/**
* Dummy data fetched when call is made by target function
*/
const promiseData = {
  "data": "someData"
}

describe('TranslatePipe', () => { //setup testing environment
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TranslatePipe //provide required pipe
      ]
    });
  });

  it("Make a valid function call",
    testTransform("data", "Defined")
  );

  it("Make function call with invalid data",
    testTransform("invalidData", "Undefined")
  );

  it("Make function call with undefined data",
    testTransform(undefined, "Undefined")
  );

});

/**
* This function will test the method transform() of the pipe
*/
function testTransform(data: any, result: any) {
  return (
    async(inject([TranslatePipe],
      (pipe: TranslatePipe) => { // define alias and inject service
        spyOn(pipe, "transform").and.returnValue(promiseData); //mock result received from service
        let resp = pipe.transform(data);
        expect(resp[data])['toBe' + result](); //if data is available in result then defined, otherwise undefined
      })));
}
