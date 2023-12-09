export class WeatherData {
    public name: string;
    public isDay: boolean;
    public tempCurr: string;
    public tempFeelsLike: string;
    public tempMin: string;
    public tempMax: string;
    public sight: string;
    public windSpeed: string;
    public direction: string;
    public clouds: string;
    public humidity: string;

    constructor() { // Default values
        this.name = "X";
        this.isDay = false;
        this.tempCurr = "X";
        this.tempFeelsLike = "X";
        this.tempMin = "X";
        this.tempMax = "X";
        this.sight = "X";
        this.windSpeed = "X";
        this.direction = "X";
        this.clouds = "X";
        this.humidity = "X";
    }
}
