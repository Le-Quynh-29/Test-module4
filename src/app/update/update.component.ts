import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  book!: any;
  id!: any;
  constructor(private route: ActivatedRoute,
    private router:Router,
    private service: BookService,
    ) { }
  ngOnInit(): void {
    this.book = new Book();
    this.id = this.route.snapshot.params['id'];
    this.service.getBook(this.id).subscribe(
      (      data: any) =>{
        this.book = data;
        console.log(this.book);
      },(error: any) => {
        console.log(error);
      }
    )
  }
  edit(){
    this.service.updateBook(this.id,this.book).subscribe(
      (      data: any) =>{
        console.log(data);
        this.book = new Book();
        this.router.navigate([''])
      },(error: any) => {
        console.log(error)
      }
    )
  }

  gotoList() {
    this.router.navigate(['']);
  }
}
