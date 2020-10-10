import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { FeedsService } from './core/services/feeds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practice-interceptor';

  constructor(
    private authService: AuthService,
    private feedService: FeedsService
  ) {

  }

  ngOnInit() {
  }
}
