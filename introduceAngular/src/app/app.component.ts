import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Angular Öğrenmeye hazır mısın?';
  paragraph: string = "Bu html'e bind edilecek bir paragraf";
  createdDate: string = 'Haziran 2024';

  isApproved: boolean = true;

  countries: string[] = ["Türkiye","KKTC","Norveç","Almanya"] 
  

}
