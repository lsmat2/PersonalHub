import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
	// Set up dynamic hour and minute hands
	@ViewChild( 'hourHand', {static: false}) hourHand!: ElementRef;
	@ViewChild( 'minuteHand', {static: false}) minuteHand!: ElementRef;

	constructor() { }

	ngOnInit() {
		setInterval( () => {
				const date = new Date();
				this.update(date);
			}, 1000 * 5); // Update every 5 seconds
	}

	// Rotate the hands every minute
	update(date: Date) { 
		this.minuteHand.nativeElement.style.transform = 'rotate(' + (date.getMinutes() * 6) + 'deg)';
		this.hourHand.nativeElement.style.transform = 'rotate(' + (date.getHours() * 30 + date.getMinutes() * 0.5) + 'deg)';
	}
}
