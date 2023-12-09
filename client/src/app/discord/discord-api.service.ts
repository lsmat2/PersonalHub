import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DiscordMessage {
    date: string;
    msg: string;
}

@Injectable({
    providedIn: 'root'
})
export class DiscordApiService {
    private apiServerUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    public getAllMessages(): Observable<DiscordMessage[]> {
        return this.http.get<DiscordMessage[]>(`${this.apiServerUrl}/discord`);
    }
}
