import  {of,tap,map,take} from 'rxjs'


let arr$ = of(1,2,3,4)

arr$.pipe(
    map((x)=>x*2),
    tap(()=>console.log('side effect')),
    take(3),
).subscribe(console.log)

