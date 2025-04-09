import {Component, inject, OnInit} from '@angular/core';
import {UnsplashRestService} from './services/rest/unsplash-rest.service';
import {HttpClientModule} from '@angular/common/http';
import {PhotoGridComponent} from './components/photo-grid/photo-grid.component';
import {PaginatorService} from './services/paginator.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        HttpClientModule,
        PhotoGridComponent
    ],
    providers: [
        UnsplashRestService,
        PaginatorService
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    paginatorService: PaginatorService = inject(PaginatorService);

    ngOnInit() {
        this.paginatorService.getPhotos();
    }
}
