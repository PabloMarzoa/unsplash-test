import {Component, Input} from '@angular/core';
import {IPhoto} from '../../models/photo';

@Component({
    selector: 'app-photo-grid',
    imports: [],
    templateUrl: './photo-grid.component.html',
    styleUrl: './photo-grid.component.scss',
    standalone: true
})
export class PhotoGridComponent {

    @Input() photos: IPhoto[] = [];
}
