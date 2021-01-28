import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id!: number;
  book!: Book;
  // category!: Category;

  constructor(private route: ActivatedRoute,
      private router: Router,
       private service: BookService) {
  }

  ngOnInit(): void {
    this.book = new Book();
    // this.category = new Category();

    this.id = this.route.snapshot.params['id'];

    this.service.getBook(this.id)
      .subscribe(data => {
        console.log(data);
        this.book = data;
      }, error => console.log(error));

  }

  cancle() {
    this.router.navigate(['']);
  }

}
