import 'rxjs/Rx';

import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Http } from '@angular/http';
import { Feedback } from './shared/feedback';

@Component({
  selector: 'list-view-feedback',
  templateUrl: './list-view-feedback.component.html',
  styleUrls: ['./grid-feedback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackListComponent implements OnInit {

  public items: Feedback[];
  public feedbackUser: any;

  public constructor(private http: Http,
    private changeDetector: ChangeDetectorRef) {}

  public ngOnInit() {
    this.http.get('https://squaresfeedbackapi.azurewebsites.net/api/feedback/')
      .map(this.extractFeedbacks)
      .subscribe(values => {
        this.items = values;
        this.items.forEach((item: any) => {
          item.user.do_not_contact = item.do_not_contact;
          item.commentGroup = {
            comment: item.comment,
            url: item.url
          };
        });
        this.changeDetector.markForCheck();
      });
  }

  public combineFields(...fields): any[] {
    return fields;
  }

  private extractFeedbacks(res: Response | any) {
    let body = res.json();
    console.log(body.records);
    return (body.records || []) as Feedback[];
  }
}
