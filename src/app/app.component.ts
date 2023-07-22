import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root', // Selector del componente
  templateUrl: './app.component.html', // Ruta de la plantilla HTML asociada al componente
  styleUrls: ['./app.component.css'] // Rutas de los archivos de estilo CSS asociados al componente
})
export class AppComponent {
  productsPixabay: any[] = []; // Matriz para almacenar los productos de Pixabay
  productsUnsplash: any[] = []; // Matriz para almacenar los productos de Unsplash

  constructor(private http: HttpClient) { } // Inyección de dependencia del servicio HttpClient

  searchImagesPixabay() {
    const query = 'flowers'; // Palabra clave para buscar imágenes relacionadas con productos
    const apiKey = '38331756-59fba04f4a76ad06b23650d53'; // Clave de API de Pixabay
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}`; // URL de la API de Pixabay

    // Realizar solicitud HTTP GET a la API de Pixabay
    this.http.get(apiUrl).subscribe((response: any) => {
      // Mapear los resultados de la API de Pixabay y asignarlos a la matriz de productos de Pixabay
      this.productsPixabay = response.hits.map((hit: { id: any; tags: any; webformatURL: any; }) => ({
        id: hit.id,
        name: hit.tags,
        imageUrl: hit.webformatURL
      }));
    });
  }

  searchImagesUnsplash() {
    const query = 'product'; // Palabra clave para buscar imágenes relacionadas con productos
    const apiKey = '1os_cgXeq7sy68Wr3ozqb2g6vBwDl_AZAj0XN-qP8Ag'; // Clave de API de Unsplash
    const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`; // URL de la API de Unsplash

    // Realizar solicitud HTTP GET a la API de Unsplash
    this.http.get(apiUrl).subscribe((response: any) => {
      // Mapear los resultados de la API de Unsplash y asignarlos a la matriz de productos de Unsplash
      this.productsUnsplash = response.results.map((result: { id: any; alt_description: any; urls: { regular: any; }; }) => ({
        id: result.id,
        name: result.alt_description,
        imageUrl: result.urls.regular
      }));
    });
  }
}


