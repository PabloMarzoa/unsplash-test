import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UnsplashRestService} from './services/rest/unsplash-rest.service';
import {HttpClientModule} from '@angular/common/http';
import {IPhoto} from './models/photo';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        HttpClientModule
    ],
    providers: [
        UnsplashRestService
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    private unsplashRestService: UnsplashRestService = inject(UnsplashRestService);
    photosCollection: IPhoto[] = [];

    onGetAllPhotos(): void {
        this.unsplashRestService.getPhotos().subscribe((res: IPhoto[]) => {
            console.log('test-res', res);
            this.photosCollection = res;
        })
    }
}
