import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const myObservable$ = new Observable(observer => {
  // This is just an example, you could have any code here that emits values or errors.
  observer.next('Hello');
  observer.next('World');
  observer.error(new Error('Something went wrong!'));
});

myObservable$
  .pipe(
    retry(2), // retry up to 2 times
    catchError(error => {
      console.error('Error:', error.message);
      return throwError('Something bad happened!');
    })
  )
  .subscribe(
    value => console.log(value),
    error => console.error('Final error:', error),
    () => console.log('Complete')
  );
