import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  response: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('https://api.jikan.moe/v4/top/anime')
    .subscribe(res => {
      this.response = res;
      console.log(res)
    })
  }

}
