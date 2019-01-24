import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors: string[];

  constructor(private authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }

  ngOnInit() {}
}
