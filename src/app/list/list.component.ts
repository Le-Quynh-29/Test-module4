import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  book!: any;
  constructor(
    private service: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData()
  }


  deleteBook(id: number) {
    this.service.deleteBook(id)
      .subscribe(
        (data: any)=>{
          console.log(data);
          this.loadData();
        },
        (error: any)=>console.log(error));
  }

  loadData(){
    this.service.getBookList().subscribe(
      (      data: any)=>{
        this.book = data
      },(error: any)=>{
        console.log(error)
      }
    )
  }

}
