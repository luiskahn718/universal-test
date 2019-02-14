import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-mock',
  templateUrl: './mock-server.component.html',
  styleUrls: ['./mock-server.component.scss'],
})
export class MockServerComponent implements OnInit {
  constructor(
    private readonly meta: MetaService,
    private apiService: ApiService
  ) {}
  article: any;
  ngOnInit(): void {
    this.apiService.showArticle('tmz').subscribe(res => {
      this.article = res.body.data;
      this.meta.setTag('og:image', this.article.featured_image_url);
    });
    this.meta.setTag('description', 'Meta update 123123');
    this.meta.setTag('og:description', 'Meta update 123123');
    this.meta.setTag('og:title', 'Meta update 123123');

  }
}
