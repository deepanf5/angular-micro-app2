import { Component, signal } from '@angular/core';
import { MovieDetails } from './components/movie-details/movie-details';

@Component({
  selector: 'app-root',
  imports: [MovieDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movieDetails');
}
