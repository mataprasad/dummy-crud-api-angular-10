import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EbsService {

  constructor() { }

  private ajaxLoaderSubject: Subject<boolean> = new Subject<boolean>();

  ajaxLoader(): Subject<boolean> {
    return this.ajaxLoaderSubject;
  }
}
