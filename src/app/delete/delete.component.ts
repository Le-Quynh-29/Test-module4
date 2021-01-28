import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  id!: number;
  book!: Book;
  constructor(private service: BookService,
              private route: ActivatedRoute,
              private router:Router
  ) {
  }

  ngOnInit(): void {
    this.book = new Book();
    this.id = this.route.snapshot.params['id'];

    this.service.getBook(this.id)
      .subscribe(data => {
        console.log(data);
        this.book = data;
      }, error => console.log(error));

    console.log(this.id)
  }

  deleteBook() {
    this.service.deleteBook(this.id).subscribe(
      data=>{
        console.log(data);
        this.router.navigate([''])
      });
  }

  cancle() {
    this.router.navigate([''])
  }

}
