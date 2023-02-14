import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { count, debounceTime, distinct, elementAt, filter, first, from, last, max, min, Observable, skip, take, takeLast, takeWhile } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchForm!: FormGroup;

  categories = ['tvs', 'mobiles', 'chargers', 'tvs', 'chargers', 'headphones', 'chargers', 'tvs', 'laptops'];
  category$: Observable<string> = from(this.categories);

  ranks = [1,7,18,98,45,22,56];
  ranks$: Observable<number> = from(this.ranks);

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.searchForm = new FormGroup({

      name: new FormControl('start search')

    })

    this.searchForm.get('name')?.valueChanges
    .pipe(
      // takeLast(2),
      // takeWhile((v) => this.checkCount(v)), // take values till a condition is true
      // take(2),  // take only 2 values
      // debounceTime(5000) // time lag before it emits the next value
      
      filter((v) => this.checkCharCount(v)), 
    )
    .subscribe(data =>{
      console.log(data);
// max operator 
      // this.ranks$
      // .pipe(
      //   distinct(),
      //   filter((v) => this.filterValues(v)),
      //   max()
      // )
      // .subscribe(data =>{
      //   console.log(`Max value is: ` + data);
      // });
// min operator 
      this.ranks$
      .pipe(
        distinct(),
        filter((v) => this.filterValues(v)),
        min()  
      )
      .subscribe(data =>{
        console.log(`Min value is: ` + data);
      });

      this.category$.pipe(
        distinct(), 
        // skip(2)
        count()

        ).subscribe(data =>{
        console.log(data);
      })

      // this.category$.pipe(
      //   // takeLast(2) // used whenever one is sure about the data set, and you need specific last emitted values
      //   // first()
      //   // last()
      //   elementAt(3) // returns headphones 
      // )
      // .subscribe(data2 => {
      //     console.log(data2);
      //   })
    })
  }
// max operator
  // filterValues(v:number){
  //   return v < 10 ? false : true;
  // }

// min operator
  filterValues(v:number){
    return v > 30 ? false : true;
  }

  checkCharCount(v:string){
    return v.length < 10 ? false : true;
  }

  checkCount(value:string){
    return value.length > 5 ? true : false;;
  }

  readValue(){

  }

}
