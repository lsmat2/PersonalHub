import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  articles : any = []; // Articles to display (top 16 to fit our box)

  constructor(private newsApi : NewsApiService) {}

  ngOnInit() { // Get the data from the API service
    this.newsApi.topArticles().subscribe( (result) => {
      console.log(result);
      this.articles = result.articles.slice(0, 16);
    })

  }

}
