import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-imagen',
  templateUrl: './mostrar-imagen.component.html',
  styleUrls: ['./mostrar-imagen.component.scss']
})
export class MostrarImagenComponent{
  @Input() public imagen: string = '';

  private imagenError: string = 'https://m.media-amazon.com/images/I/61FQCSP7ZIL._SS500_.jpg';
  public cambiarImagenError(): void {
    this.imagen = this.imagenError;
  }

}
