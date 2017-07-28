import { Component } from '@angular/core';

@Component({
  selector: 'record-summary',
  templateUrl: './record-summary.component.html',
  styleUrls: ['/../grid-feedback.component.scss']
})
export class RecordSummaryComponent {
  public name = 'Robert C. Hernandez';

  public showTitle = true;

  public showSubtitle = true;

  public showStatus = true;

  public showContent = true;

  public showKeyInfo = true;

}
