import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = 'Video Gallery';
  videoList: { name: string; slug: string; embed: string; url: string }[] = [];
  safeUrls: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Simulación de datos de videos
    this.videoList = [
      {
        name: 'God of War Ragnarök | Tráiler de la historia | PS5, PS4',
        slug: 'https://youtu.be/F3jePdO9_jc',
        embed: '<p>Embárcate en un viaje épico e inquebrantable mientras Kratos y Atreus deben decidir si seguirán su destino o verán más allá de lo que ya está escrito y tomarán las riendas de su futuro.</p>',
        url: 'https://www.youtube.com/embed/F3jePdO9_jc?si=hPHGynFcJXcFor7N'
      },
      {
        name: 'Horizon Forbidden West - Tráiler CINEMÁTICO 4K PS5 en ESPAÑOL | PlayStation España',
        slug: 'https://youtu.be/9hvH3OdjdWA',
        embed: '<p>¡Álzate sobre nuestras ruinas! Únete a Aloy en su aventura por el Oeste Prohibido en PS4 y en PS5. Nuevas y misteriosas amenazas asolan La Tierra. Explora territorios nunca antes vistos, descubre las tribus y cuidado con los enemigos colosales.</p>',
        url: 'https://www.youtube.com/embed/9hvH3OdjdWA?si=q408kjVq1qEOOn9n'
      }
      // Agrega más videos según sea necesario
    ];

    this.safeUrls = this.videoList.map(video =>
      this.sanitizer.bypassSecurityTrustResourceUrl(video.url)
    );
  }

  getEmbedURL(index: number): SafeResourceUrl {
    return this.safeUrls[index];
  }
}

