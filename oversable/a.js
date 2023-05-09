import {Observable} from 'rxjs'



var data$ = Observable.create(obj=>{
    obj.next(1)
    obj.next(2)
    obj.next(3)
    obj.next(4)
    obj.complete()

})

var data1 = data$.subscribe(x=>{
    console.log(x)
},()=>{},
    ()=>console.log("complete")
)
