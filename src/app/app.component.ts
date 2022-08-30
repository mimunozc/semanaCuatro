import { Component } from '@angular/core';
import { HistoriaImagen } from './modelos/historia-imagen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public elementosGuardados: Array<HistoriaImagen> = [];

  public nuevoHistorial: HistoriaImagen = {
    nombre: '',
    detalle: '',
    imagen: ''
  }

  public cambiarNombre (evento : Event ): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.nombre = elemento.value;
  }

  public cambiarDetalle (evento : Event ): void {
      const elemento = evento.target as HTMLInputElement;
      this.nuevoHistorial.detalle = elemento.value;
  }

  public cambiarImagen (evento : Event ): void {
        const elemento = evento.target as HTMLInputElement;
        this.nuevoHistorial.imagen = elemento.value;  
  }

  public guardarHistorial(): void {
    // 1 nivel
    const copia: HistoriaImagen = {
      ...this.nuevoHistorial
    }
    copia.id = this.elementosGuardados.length + 1;
    this.elementosGuardados.push(copia);
    this.nuevoHistorial.nombre="";
    this.nuevoHistorial.detalle="";
    this.nuevoHistorial.imagen="";
  }


  public imagen: string= 'https://www.xtrafondos.com/descargar.php?id=&vertical=1';
  public imagen2: string= 'https://wallery.app/dufovot/trail-in-autumn-wallpaper.webp';
  public imagen3: string= 'https://fondosmil.com/fondo.jpg';
  public imagen4: string= 'https://www.xtrafondos.com/descargar.php?id=3341&vertical=1';
  public imagen5: string= 'https://i.pinimg.com/originals/c5/09/b3/c509b32332c45.jpg';
}
