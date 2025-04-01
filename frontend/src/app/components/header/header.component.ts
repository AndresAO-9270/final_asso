import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() logoUrl: string = 'src/assets/images/logo2.jpg'; // Ruta de la imagen del logo
  @Input() logoWidth: string = 'auto'; // Ancho del logo
  @Input() logoHeight: string = '40px'; // Altura del logo
}
