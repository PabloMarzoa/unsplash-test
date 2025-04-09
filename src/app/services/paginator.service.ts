import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {UnsplashRestService} from './rest/unsplash-rest.service';
import {IPhoto} from '../models/photo';

@Injectable()
export class PaginatorService {
    public unsplashRestService: UnsplashRestService = inject(UnsplashRestService);

    public photosPageCollection: WritableSignal<IPhoto[]> = signal([]);

    getPhotos(): void {
        this.unsplashRestService.getPhotos().subscribe((res: IPhoto[]) => {
            this.photosPageCollection.set(res);
        })
    }
}
