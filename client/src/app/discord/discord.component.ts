import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { DiscordApiService, DiscordMessage } from './discord-api.service';


@Component({
    selector: 'app-discord',
    standalone: true,
    imports: [NgFor],
    templateUrl: './discord.component.html',
    styleUrls: []
})
export class DiscordComponent implements OnInit {
    messages: DiscordMessage[] = [];

    constructor(private apiService: DiscordApiService) { }

    ngOnInit(): void {
        this.apiService.getAllMessages().subscribe({
            next: (res) => {
                this.messages = res;
            },
            error: (err) => {
                console.log(err);
            }
        });

        setInterval(() => {
            this.apiService.getAllMessages().subscribe({
                next: (res) => {
                    this.messages = res;
                },
                error: (err) => {
                    console.log(err);
                }
            });
        }, 1000 * 5); // Get the messages every 5 seconds for demo purposes
    }
}
