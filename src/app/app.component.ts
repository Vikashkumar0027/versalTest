import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
// https://www.positronx.io/angular-server-side-pagination-with-ngx-pagination-example/
// npm install ngx-pagination



  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 11;
  totalData =Array(110);
  // tableSizes: any = [3, 6, 9, 12];
  constructor(private postService: ServiceService) {}

  ngOnInit(): void {
    this.fetchPosts();
    // const items = Array(15).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
    console.log('total array length',this.totalData);
  }
  fetchPosts(): void {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.POSTS = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
}

