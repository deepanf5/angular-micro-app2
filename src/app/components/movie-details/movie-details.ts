import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails implements OnInit, OnDestroy {

  selectedMovie: any
  constructor(private cdr: ChangeDetectorRef) { }


  private eventHandler = (event: any) => {
    this.selectedMovie = event.detail.movie;
    this.cdr.detectChanges(); // Ensure UI updates in 2025 async contexts
  };

  ngOnInit(): void {
    window.addEventListener('MOVIE_SELECTED', this.eventHandler);
  }


  ngOnDestroy() {
    // Essential: prevent memory leaks in long-running 2025 apps
    window.removeEventListener('MOVIE_SELECTED', this.eventHandler);
  }



}
