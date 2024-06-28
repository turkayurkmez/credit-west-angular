import { Component, OnInit } from '@angular/core';

import { Observable, catchError, filter, map, of, tap } from 'rxjs';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  baslik = 'reactive Angular';

  title$ = new Observable((observable) => {
    setInterval(() => observable.next(), 1000);
  });

  products: Product[] = [
    new Product(1, 'A', 100, 0.15,0),
    new Product(2, 'B', 100, 0.25,0),
    new Product(3, 'C', 100, 0.1,0),
    new Product(4, 'D', 100, 0.13,0),
  ];

  products$ = of(this.products);

  constructor() {
    //Reactive js (RxJs) kütüphanesi, bir nesne üzerinde yapılan değişiklikte, subscriber'lara
    //otomatik çağrı gönderen bir pattern'dir.
    // this.title$.subscribe(() => {
    //   let timeStamp = new Date().getSeconds();
    //   this.baslik = 'Rxjs nedir?   ' + timeStamp.toString();
    // });

    const values = of(4, 8, 9, 5, 6, 2, 5, 12);

    values
      .pipe(
        //filter((x: any) => x % 2 == 0),
        map((m: any) => {
          if (m === null) {
            throw new Error('Olmaz bu');
          }
          return Math.pow(m, 2);
        }),
        catchError((err) => {
          console.log(err);
          return of('Hata meydana geldi ' + err);
        })
      )
      .subscribe(
        (data) => console.log(data),
        (err) => console.log('hata!'),
        () => console.log('işlem tamamlandı')
      );
  }
  ngOnInit(): void {
    this.products$.pipe(
      map((productArray) => 
        productArray.map(
          //product instance'ı oluştur:
          (p) => new Product(p.id,p.name,p.price,p.discount, p.discountedPrice = p.price * (1 - p.discount))
        )
      )
    ).subscribe(data=>this.products = data);
  }

  // add(){
  //   console.log(this.title$.pipe(tap(x=>console.log(x))));
  // }
}
