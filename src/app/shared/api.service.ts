import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(private http:HttpClient) { }
    API='http://localhost:3000/posts';

    getAllData()
    {
      return this.http.get(`${this.API}`)
    }
    postData(data:any)
    {
      return this.http.post(`${this.API}`,data)
    }
    deleteData(id:number)
    {
      return this.http.delete(`${this.API}/${id}`)
    }
    editData(id:number)
  {
    return this.http.get(`${this.API}/${id}`);
  }
  editRecord(id:number,data:any)
  {
    return this.http.put(`${this.API}/${id}`,data);
  }
  }
