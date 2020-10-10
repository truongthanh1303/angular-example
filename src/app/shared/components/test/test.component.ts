import { Component, OnInit } from '@angular/core';
import { FeedsService } from 'src/app/core/services/feeds.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private feedService: FeedsService) { }

  ngOnInit(): void {
    console.log('abc');
    this.feedService.getFeed().subscribe(res => console.log('Test component,  feed response ', res));
  }

}
