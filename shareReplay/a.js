import { of } from 'rxjs';
import { delay, shareReplay,tap } from 'rxjs/operators';

const observable = of('Hello').pipe(
  delay(1000),
  tap(console.log(`b`)),
  shareReplay(1) // Will cache 1 emitted value for later subscribers
);

observable.subscribe(value => console.log(`Subscriber 1: ${value}`));
// Output: "Subscriber 1: Hello" (after a 1 second delay)

setTimeout(() => {
  observable.subscribe(value => console.log(`Subscriber 2: ${value}`));
  // Output: "Subscriber 2: Hello" (immediately, without a delay)
}, 2000);
