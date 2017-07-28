import 'rxjs/Rx';

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'list-view-feedback',
  templateUrl: './list-view-feedback.component.html',
  styleUrls: ['./grid-feedback.component.scss']
})
export class FeedbackListComponent implements OnInit {

  public items: any[];
  
  public constructor(private http: Http) {}
  
  public ngOnInit() {
    this.http.get(***URL***)
      .subscribe(res => {
        this.items = res.json();
      });
  }  
}
