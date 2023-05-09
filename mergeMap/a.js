import { fromEvent } from 'rxjs'
import {mergeMap} from 'rxjs/operators'

fromEvent(button,'click')
.pipe(()=>{
    mergeMap(()=>{
        return fetch('https://jsonplaceholder.typicode.com/users')
    })
}).subscribe(x=>{
    console.log(x)
})