import { Component } from '@angular/core';
import { WeatherWidgetComponent } from '../weather-app/widget/weather-widget.component';
import { ClockComponent } from '../clock/clock.component';

@Component({
    selector: 'app-homepage',
    standalone: true,
    imports: [
        WeatherWidgetComponent,
        ClockComponent
    ],
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {
    currentMessage : string = "Welcome to team-94's website!";

    messagePool = [
        // Simple welcomes
        "Welcome to team-94's website",
        "Greetings and welcome to our online home!",
        "Hello and a warm welcome to team-94's website!",
        "안녕하세요!",

        // Quotes
        "Once you replace negative thoughts with positive ones, you’ll start having positive results - Willie Nelson",
        "The happiness of your life depends upon the quality of your thoughts - Marcus Aurelius",
        "Positive anything is better than negative nothing - Elbert Hubbard",
        "The good life is a process, not a state of being. It is a direction, not a destination - Carl Rogers",
        "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present - Master Oogway (Kung Fu Panda)",
        "One often meets his destiny on the road he takes to avoid it - Master Oogway (Kung Fu Panda)",
        "To make something special, you just have to believe it's special - Mr. Ping (Kung Fu Panda)",
        "In the pursuit of knowledge, one must be open to questioning and doubt – Willibald (Vinland Saga)",
        "You won’t accomplish anything just by worrying about your problems – Thors (Vinland Saga)",
        "There is yet joy beyond your sorrows. What's gone may be gone, but you still have something left in this world to treasure - Jinbei (One Piece)",
        "The difference between a novice and a master is that a master has failed more times than a novice had tried - Koro-Sensei (Assassination Classroom)",
        "If you don’t take risks, you can’t create a future - Monkey D. Luffy (One Piece)",
        "You made it! (≧∇≦)/",
        "It's bed time... ʕ – ㉨ – ʔ"
    ]

    ngOnInit() {
        // Update the homepage message every 10 seconds
        setInterval( () => {
            let random = Math.floor(Math.random() * this.messagePool.length);
            this.currentMessage = this.messagePool[random];
        }, 1000 * 10);
    }
}
