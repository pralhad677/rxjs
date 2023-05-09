import { forkJoin, Observable } from 'rxjs';

const obs1$ = new Observable((subscriber) => {
  setTimeout(() => subscriber.next(1), 1000);
});

const obs2$ = new Observable((subscriber) => {
  setTimeout(() => subscriber.next(2), 2000);
});

const obs3$ = new Observable((subscriber) => {
  setTimeout(() => subscriber.next(3), 3000);
});

forkJoin([obs1$, obs2$, obs3$]).subscribe((result) => {
  console.log(`Results: ${result}`);
});
