import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  book: Book = new Book();
  constructor(
    private service: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.book = new Book();
  }

  save() {
    console.log(this.book);
    this.service.createBook(this.book).subscribe(
      (data: any) => {
        console.log(data);
        this.book = new Book();
        this.gotoList();
      },
      (error: any) => console.log(error)
    );
  }
  onSubmit() {
    this.save();
  }

  gotoList() {
    this.router.navigate(['']);
  }

}
