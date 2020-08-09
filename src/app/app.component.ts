import { Component, AfterViewInit , OnInit, AfterContentChecked,ChangeDetectorRef } from '@angular/core';
import { EbsService } from './ebs.service';

declare var feather: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, AfterContentChecked {
  title = 'dummy-crud-api';

  loading = false;

  constructor(private ebsService: EbsService
    ,private window: Window
    ,private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    feather.replace();
  }

  ngAfterContentChecked(): void {
    this.ebsService.ajaxLoader().asObservable().subscribe((isLoading)=>{
      this.loading = isLoading;
      this.cdr.detectChanges();
    });
  }
}
