import { merge, interval } from 'rxjs';
import { take } from 'rxjs/operators';

// create two observables
const observable1$ = interval(1000).pipe(take(3));
const observable2$ = interval(500).pipe(take(5));

// merge the two observables
const merged$ = merge(observable1$, observable2$);

// subscribe to the merged observable
merged$.subscribe(console.log);
