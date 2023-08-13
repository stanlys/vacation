import { Component, OnInit } from '@angular/core';

import * as dayjs from 'dayjs';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Observable } from 'rxjs';

export const characterAttributesMapping = {
  id: 'id',
  login: 'login',
  password: 'password',
  role: ' role',
  owner: 'owner',
};

export interface Character {
  id: string;
  login: string;
  password: string;
  role: string;
  owner: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'holiday';
  startDate: Date = new Date();
  endDate: Date = new Date();
  maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 14));

  loading = false;
  formData: any = {};

  characters$: Observable<Character[]> = new Observable();

  constructor(private googleSheetService: GoogleSheetsDbService) {}

  ngOnInit(): void {
    this.characters$ = this.googleSheetService.get(
      '1amz6Lh3i0ArpMtswsT_oF7i3Jj-KTGfik5qMj2l2R3g',
      'users',
      characterAttributesMapping
    );
    this.characters$.subscribe((_) => {
      console.log('___', _);
    });
  }

  helloWorld() {
    console.log(
      ` start ${dayjs(this.startDate).format('MM / DD / YYYY')}  | end ${dayjs(
        this.endDate
      ).format('MM * DD * YYYY')}`
    );
  }

  onCreateAccountClick() {}

  async onSubmit(e: Event) {
    e.preventDefault();
    const { email, password } = this.formData;
    this.loading = true;
  }
}
