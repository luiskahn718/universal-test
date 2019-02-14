import { Component, OnInit } from '@angular/core';
import { ApiService } from "./api.service";
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-mock-server-browser',
  templateUrl: './mock-server-browser.component.html',
})
export class MockServerBrowserComponent implements OnInit {
  constructor(
    private readonly meta: MetaService,
    private apiService: ApiService
  ) {}
  article: any;
  ngOnInit(): void {
    this.apiService.showArticle('tmz').subscribe(res => {
      this.article = res.body.data.article;
      this.meta.setTag('og:image', this.article.featured_image_url);
    });
    this.meta.setTag('description', 'Meta update 123123');
    this.meta.setTag('og:description', 'Meta update 123123');
    this.meta.setTag('og:title', 'Meta update 123123');

  }
}
