import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LibraryComponent } from './library/library.component';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [
        RouterLink,
        LibraryComponent
    ],
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
}
