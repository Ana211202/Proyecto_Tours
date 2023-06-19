import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchTerm: string = ''; 
  searchResults: any[] = []; 

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'];
        this.searchResults = this.performSearch(this.searchTerm);
    });
  }

  performSearch(searchTerm: string): any[] {
     const destinations = [
      { name: 'Corea', type: 'Tour a Seul Corea' },
      { name: 'Peru', type: 'Tour Machu Picchu Peru' },
      { name: 'Petra', type: 'Tour a Petra Jordania' }
    ];

    return destinations.filter(destination =>
      destination.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}