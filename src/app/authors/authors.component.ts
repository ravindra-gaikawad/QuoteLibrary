import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Quote } from '../models/quote';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  quotes: Quote[];
  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService) { }

  
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getQuotes(id);
  }

  getQuotes(authorId:number): void {
    this.authorService.getQuotes(authorId)
    .subscribe(quotes => this.quotes = quotes);
  }


}

