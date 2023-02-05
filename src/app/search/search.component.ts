import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.searchForm = new FormGroup({

      name: new FormControl('start search')

    })

    this.searchForm.get('name')?.valueChanges.pipe(debounceTime(5000)).subscribe(data =>{
      console.log(data);
    })
  }

  readValue(){

  }

}