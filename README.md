# GWeather

Weather Forecast Application displays a 5 - day wether forecast in your city. Each day shows the high and low temperatures with images of weather (sunny/rainy/cloudy/snowy). You can click on each day's block to get more information (hourly weather forecast for that day).

- [LiveDemo](https://geebrox.github.io/) - Live Demo Of Application

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To run the application you need:

```
Node Package Manager - npm
```

### Installing

Download the source files and in command line run

```
npm install
```

To serve application on you local machine run

```
npm run serve
```

To build application run the command

```
npm run build
```

## Deployment

To deploy correctly you need API keys from two services:

- [OpenWeatherMap](https://openweathermap.org/) - To get weather forecast information
- [ipgeolocation](https://ipgeolocation.io/) - To get location of users for weather forecasting

API Keys need be edited in ./src/services/GeolocationService.js and in ./src/services/WeatherService.js
There are variables for API Key (SERVICE_KEY) at the top files.

## Built With

- [OpenWeatherMap](https://openweathermap.org/api/) - The "OpenWeatherMap API Guide" helps you find useful information, links, documents to start using our weather API services smoothly.
- [ipgeolocation](https://ipgeolocation.io/documentation.html/) - Free IP Geolocation API and GeoIP Lookup Database
- [freepik](https://www.freepik.com/free-photos-vectors/icon) - Used to generate weather SVG icons

## Authors

- **bek** - _Initial work_ - [Geebrox](https://github.com/Geebrox)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
