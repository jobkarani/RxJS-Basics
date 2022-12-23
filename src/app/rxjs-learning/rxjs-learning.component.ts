import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {

  agents!:Observable<string>;
  agentName!:string;

  constructor() {}

  ngOnInit(): void {
      this.agents = new Observable(
        function (observer){
          try{
            observer.next('ayub');
            setInterval(()=>{
              observer.next('tina');
            }, 2000);
          }
          catch(e){
            observer.error(e);
          }
        }
      );
        this.agents.subscribe(data =>{
          this.agentName = data;
          console.log(data);
        })
  }

}
