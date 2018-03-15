import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title = "Authors";
  authors;
  count;

  constructor(authorService: AuthorsService) { 
      this.authors = authorService.getAuthors();
      this.count = 3;
  }

  ngOnInit() {
  }

}
