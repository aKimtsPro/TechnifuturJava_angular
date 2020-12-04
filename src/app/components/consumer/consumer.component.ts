import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EMPTY, NEVER, Observable, of, Subscription, timer, from, interval, fromEvent, Subject, BehaviorSubject, ReplaySubject, merge } from 'rxjs';
import { concatMap, exhaustMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { Post } from 'src/app/model/Post.model';
import { ApiConsumerService } from 'src/app/service/apiConsumer.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {

  data: any[] = [];
  hotObs: ReplaySubject<string>;
  inputValue: string = "";

  constructor(private apiService: ApiConsumerService) {

    let obs: Observable<number>

    //    obs.subscribe( console.log )
  }

  ngOnInit() {
    this.hotObs = new ReplaySubject<string>(3);

    let event = fromEvent(document.getElementById("metaBtn"), 'click');

    event
      .pipe( exhaustMap( e => timer(1000) ))
      .subscribe((e) => console.log("clicked and timed : " + new DatePipe("en-US").transform(new Date(),"hh:mm:ss:SSS")))

    event
      
    .subscribe((e) => console.log("clicked : "+new DatePipe("en-US").transform(new Date(),"hh:mm:ss:SSS")))
  }

  load(){
    this.data = [];
    
    let obs = this.apiService.getPosts();
    let sub : Subscription = obs.subscribe(
      post => this.data.push(post), 
      error => alert(error),
      () => sub.unsubscribe());
  }

  trigger(){
    this.hotObs.next(this.inputValue)
  }

  subscribe(){
    console.log("subscribed")
    this.hotObs.subscribe(console.log);
  }

}
