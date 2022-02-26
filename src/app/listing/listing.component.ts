import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { cities } from '../_models/user.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.getcities();
  }
  gov: cities[];
  cities: cities[];


  // getcities(){
  //   this.http.get('http://127.0.0.1:8000/api/cities').subscribe(data =>{
  //     for (let i = 0; i < data['data'].length; i++) {
  //       gov[i]['id'] = data['data'][i]['id'];
  //       gov[i]['name'] = data['data'][i]['name'];
  //       gov[i]['governate'] = data['data'][i]['governate'];

  //     }
  //   });
  // }


  choosegov(gov: string){
    // this.http.post('http://127.0.0.1:8000/api/cities/',gov).subscribe();

    this.http.get('http://127.0.0.1:8000/api/cities/{gov}').subscribe(data =>{
      for (let i = 0; i < data['data'].length; i++) {
        cities[i]['id'] = data['data'][i]['id'];
        cities[i]['name'] = data['data'][i]['name'];
        cities[i]['governate'] = data['data'][i]['governate'];

      }
    });
  }
}
