import React, { PureComponent } from "react";

export class EnglishWeatherDisplay extends PureComponent {
  degrees = this.props.temp;
  humidity = this.props.humidity;
  render() {
    return(
      <div className='english'>
        <span>{Math.round(this.degrees)}°F </span>
        and {this.humidity}% humidity
      </div>
    );
  }
}

export class ChineseWeatherDisplay extends PureComponent {
  degrees = this.props.temp;
  humidity = this.props.humidity;
  render() {
    return(
      <div className='chinese'>
        這裏有<span>{Math.round(this.degrees)}°C</span>，濕度為{this.humidity}%
      </div>
    );
  }
}

export class RussianWeatherDisplay extends PureComponent {
  degrees = this.props.temp;
  humidity = this.props.humidity;
  render() {
    return(
      <div className='russian'>
        Здесь <span>{Math.round(this.degrees)}°C </span>и влажность {this.humidity}%
      </div>
    );
  }
}

export const WeatherStartingLabels = {
  'russian': 'местная погода',
  'chinese': '本地天氣',
  'english': 'Westerville Weather',
}