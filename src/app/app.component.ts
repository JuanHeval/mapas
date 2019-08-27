import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pelele';

  
  lat = 51.678418;
  lng = 7.809007;


  nombre: string= ''
  paises: any =[

    {cercano: 1, activo: true,nombre:'Colombia'},
    {cercano: 2,activo: false,nombre:'Argentina'},
    {cercano: 2,activo: true,nombre:'Brasil'},
    {cercano: 3,activo: false,nombre:'Peru'}


   

   ]

}
