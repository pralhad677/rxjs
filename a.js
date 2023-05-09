import {EMPTY,empty, of,map, EmptyError} from 'rxjs'

of(1,2,3,4).pipe(
  map(x=>{
    if(x===3){
      return empty()
    }
    return x
  }),

).subscribe({
  next:val=>console.log('val',val),
  error:val=>console.log('error',val),
  complete:()=>console.log('complete')
})