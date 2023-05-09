
import {catchError,of,pipe,map} from 'rxjs'
import {} from 'rxjs/operators'


of(1,2,3,4,5)
.pipe(
    map(x=>{
        if(x===3){
           throw 'error'
        }
        return x;
    }),
    catchError((x)=>{
        console.log('inside of catchError',x)
        return of('three')
    })
).subscribe({
    next:val=>console.log('next',val),
    error:val=>console.log('error',val)
})