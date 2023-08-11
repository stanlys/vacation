import { Component } from '@angular/core';

import * as dayjs from 'dayjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'holiday';
  startDate: Date = new Date();
  endDate: Date = new Date();
  maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 14));

  helloWorld() {
    console.log(
      ` start ${dayjs(this.startDate).format('MM / DD / YYYY')}  | end ${dayjs(
        this.endDate
      ).format('MM * DD * YYYY')}`
    );
  }
}
