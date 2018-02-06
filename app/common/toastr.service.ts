import{Injectable} from '@angular/core'
    
declare let toastr : any
@Injectable()
export class ToastrService {
    
    success( message:any, title:any) {
    toastr.success(message, title)
    
    }
}