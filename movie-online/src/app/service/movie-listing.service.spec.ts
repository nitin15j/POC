import { TestBed, inject } from '@angular/core/testing';

import { MovieListingService } from './movie-listing.service';

describe('MovieListingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieListingService]
    });
  });

  it('should be created', inject([MovieListingService], (service: MovieListingService) => {
    expect(service).toBeTruthy();
  }));
});
