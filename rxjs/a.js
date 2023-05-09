import { Observable } from 'rxjs'
import {} from 'rxjs/operators'

let a$ = new Observable(subscriber=>{
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)
    subscriber.complete()
})

let b$=a$.subscribe({
    next:val=>{console.log(val)},
    error:val=>{console.log(val)},
    complete:()=>{console.log('complete')},
})

b$.unsubscribe()