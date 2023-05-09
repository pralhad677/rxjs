import { switchMap, timer,of, interval } from "rxjs"

let arr$ = interval(1000)

// arr$.pipe(x=>{
// return x
// }).subscribe(console.log)

arr$.pipe(
    switchMap(x=>{
        console.log(`source data ${x}`)
        if(x===2){
            setTimeout(()=>{
                of(x)
            },2000)
        }
        else{

            return of(x)
        }
       
    })
).subscribe({
    next:val=>{console.log('inside of observer',val)},
    error:val=>console.log(val),
    complete:()=>console.log("complete")
})
