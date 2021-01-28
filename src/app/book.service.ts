import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = "http://localhost:3000/books"
constructor(private http:HttpClient) { }

getBookList(): Observable<any>{
  return this.http.get(`${this.baseUrl}`)
}

createBook(value: any): Observable<any>{
  return this.http.post(`${this.baseUrl}`, value)
}

deleteBook(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
}

updateBook(id: number, value: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}`, value);
}

getBook(id: number): Observable<any>{
  return this.http.get(`${this.baseUrl}/${id}`);
}

}
