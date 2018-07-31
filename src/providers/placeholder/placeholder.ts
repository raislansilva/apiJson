import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the PlaceholderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlaceholderProvider {

  private apiRest = 'https://jsonplaceholder.typicode.com/posts';

  constructor(public http: HttpClient) {
    console.log('Hello PlaceholderProvider Provider');
  }

  listaRecurso(){
    return this.http.get(this.apiRest)
    .map((data)=> {
       return data.valueOf();
    })
  }

  
     
  /*insert(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/';

      this.http.post(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }*/

  
}
