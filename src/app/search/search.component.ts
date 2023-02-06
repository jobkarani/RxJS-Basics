import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, first, from, last, Observable, take, takeLast, takeWhile } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchForm!: FormGroup;

  categories = ['mobiles','tvs', 'chargers', 'headphones', 'laptops'];
  category$: Observable<string> = from(this.categories);

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
      debounceTime(5000) // time lag before it emits the next value
    )
    .subscribe(data =>{
      console.log(data);
      this.category$.pipe(
        // takeLast(2) // used whenever one is sure about the data set, and you need specific last emitted values
        // first()
        last()
      )
      .subscribe(data2 => {
          console.log(data2);
        })
    })
  }

  checkCount(value:string){
    return value.length > 5 ? false : true;;
  }

  readValue(){

  }

}
