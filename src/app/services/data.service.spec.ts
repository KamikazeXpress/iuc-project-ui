import { TestBed } from '@angular/core/testing';
import { User } from '../User';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { defer } from 'rxjs';
import { doesNotReject } from 'assert';
describe('DataService', () => {
  let service: DataService;
  let controller: HttpTestingController;
  const name = 'user1';
  const expectedUrl = `https://app-wtdii5qboq-uc.a.run.app/api/getuserdetails?user=${name}`

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });
    service = TestBed.inject(DataService);
    controller = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    controller.verify();
  });

  it('should get users data', () => {
    const dummyUser:User ={
      "email": "johndoe@gmail.com",
      "firstname": "John",
      "lastname": "Doe",
      "phone": "123456"
    };

    service
      .getLocalDataUsers(name)
      .subscribe(
        (user:User) => {
         expect(user).toEqual(dummyUser);

        });

    const request = controller.expectOne(expectedUrl);
    request.flush(dummyUser);

  });
  it('#getData should use GET to retrieve data', () => {
    service.getLocalDataUsers(name).subscribe();
 
    const testRequest = controller.expectOne(expectedUrl);
 
    expect(testRequest.request.method).toEqual('GET');
  });

  it('passes through getusers errors', () => {
    const status = 500;
    const statusText = 'Server error';
    const errorEvent = new ErrorEvent('API error');
  
    let actualError: HttpErrorResponse | undefined;
  
    service
    .getLocalDataUsers(name)
    .subscribe(
      () => {
       
      },
      (error) => {
        console.log(error)
        actualError = error;
      },
      () => {
       
      },
    );
  
    controller.expectOne(expectedUrl).error(
      errorEvent,
      { status, statusText }
    );
  
    if (!actualError) {
      throw new Error('Error needs to be defined');
    }
    expect(actualError.error).toBe(errorEvent);
    expect(actualError.status).toBe(status);
    expect(actualError.statusText).toBe(statusText);
  });



});
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}