import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { apps } from 'src/assets/apps';
import { app } from './app';

@Component({
    selector: 'library-modal',
    standalone: true,
    imports: [
        RouterLink,
        NgFor
    ],
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.css']
})
export class LibraryComponent {
    @Input({ required: true }) id!: string;
    apps: app[] = apps;
}
