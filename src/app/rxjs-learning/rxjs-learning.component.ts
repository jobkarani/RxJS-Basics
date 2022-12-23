import { Component, OnInit } from '@angular/core';
import {  from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {
  // // subscribing to an observable ************************
  // agents!:Observable<string>;
  // agentName!:string;

   // // of operator ***********************************************
  // studentList = ['Tina','mary','cate']
  // students:Observable<string[]> = of(this.studentList);

  // // from operator ********************************************
  ordersArray = ['mary','tina','peshy','meg'];
  orders$:Observable<string> = from(this.ordersArray);

  constructor() {}

  ngOnInit(): void {

    // // subscribing to an observable ************************


    //   this.agents = new Observable(
    //     function (observer){
    //       try{
    //         observer.next('ayub');
    //         setInterval(()=>{
    //           observer.next('tina');
    //         }, 2000);
    //       }
    //       catch(e){
    //         observer.error(e);
    //       }
    //     }
    //   );
    //     this.agents.subscribe(data =>{
    //       this.agentName = data;
    //       console.log(data);
    //     })

    // // of operator ***********************************************
    // this.students.subscribe(data=>{
    //   console.log(data);
    // })

    // // from operator ********************************************
    this.orders$.subscribe(data=>{
      console.log(data);
    })


  }

}
