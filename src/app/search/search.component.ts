import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value: string = ''
  response: any;
  searched: boolean = false;
  constructor(private http: HttpClient) {

  }

  search(): void {
    this.searched = true
    if (this.value) {
      this.http.get('https://api.jikan.moe/v4/anime?q='+this.value)
      .subscribe(res => {
        this.response = res;
      })
    } else {
      alert('Field is empty')
    }
  }

  ngOnInit(): void {
  }

}
