import {Observable,range} from 'rxjs'
import {map} from 'rxjs/operators'


range(1,7)
.pipe(
    map(x=>x*2)
).subscribe(x=>console.log(x))



