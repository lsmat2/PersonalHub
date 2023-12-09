import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private apiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=519736ca4ff7465e8b166d96fe792377";

  constructor(private http : HttpClient) { }

  // Returns the top few tech headlines for USA
  topArticles() : Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
