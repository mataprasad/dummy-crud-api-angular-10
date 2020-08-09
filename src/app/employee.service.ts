import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiBaseUrl = 'https://dummy-crud-api.herokuapp.com/api';

  headers = new HttpHeaders();

  constructor(private http: HttpClient) { 
    this.headers = this.headers.set('X-API-KEY', 'test-user');
  }

  getEmployees() {
    return this.http.get(this.apiBaseUrl+"/employees",{
      headers:this.headers
    });
  }

  getEmployee(id) {
    return this.http.get(this.apiBaseUrl+"/employees/"+id,{
      headers:this.headers
    });
  }

  deleteEmployee(id) {
    return this.http.delete(this.apiBaseUrl+"/employees/"+id,{
      headers:this.headers
    });
  }

  editEmployee(id,emp) {
    return this.http.put(this.apiBaseUrl+"/employees/"+id,emp,{
      headers:this.headers
    });
  }

  addEmployee(emp) {
    return this.http.post(this.apiBaseUrl+"/employees",emp,{
      headers:this.headers
    });
  }
}
