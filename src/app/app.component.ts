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

    {activo: true,nombre:'Colombia'},
    {activo: false,nombre:'Argentina'},
    {activo: true,nombre:'Brasil'},
    {activo: false,nombre:'Peru'}


   

   ]

}
