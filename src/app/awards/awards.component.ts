import { Component } from '@angular/core';

export interface Award {
  title: string;
  detail: string;
  date: string;
}

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent {
  awards: Award[] = [
    { title: 'Winner of Pragyan Hackathon, Virtusa, NIT', detail: 'Hackathon', date: '02/2024' },
    { title: 'Tamil Nadu State 7th Rank, SSLC', detail: 'State Rank', date: '05/2019' },
    { title: 'Ethics Champion, IEEE Leadership Summit', detail: 'Leadership', date: '07/2024' }
  ];
}
