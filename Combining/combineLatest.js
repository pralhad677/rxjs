import {combineLatest,of,interval,pipe} from 'rxjs'


let obj1$ =interval(500)
let obj2$ =interval(1000)
let obj3$ =interval(1500)

combineLatest(([obj1$,obj2$,obj3$])).subscribe(([one,two,three])=>{
    console.log(`${one} ${two} ${three}`)
})


// .subscribe({
//     next:val=>`data is ${val}`,
//     error:val=>`error is ${val}`,
//     complete:()=>`completed`,
// })