import {pipe,tap,map,of,catchError} from 'rxjs'


let arr$ = of(1,2,3,4,5)

let arr1 =arr$.pipe(
    tap(x=>{
        console.log(`data is ${x}`)
    }),
    map((item,index)=>index===4?item.toUpperCase():item),
    catchError(error=>of("fallback"))
)
let arr2 =arr1.pipe(
    tap(()=>console.log("in second pipe")),
    
)

arr2.subscribe({
    next:val=>console.log(`value is ${val}`),
    error:val=>console.log(`error is ${val}`),
    complete:()=>console.log(`complete`),
})