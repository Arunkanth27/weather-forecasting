const currentDayForecast = data => [
    {
        name: 'Visibility',
        value: Math.round(data.visibility),
        unit: 'miles',
    },
    {
        name: 'predictability',
        value: data.predictability,
        unit: '%',
    },
    {
        name: 'wind direction',
        value: data.wind_direction,
        unit: 'deg',
    },
    {
        name: 'humidity',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'wind',
        value: Math.round(data.wind_speed),
        unit: 'km/h',
    },
    {
        name: 'air pressure',
        value: data.air_pressure,
        unit: 'mb',
    },
    {
        name: 'max temp',
        value: Math.round(data.max_temp),
        unit: '°C',
    },
    {
        name: 'min temp',
        value: Math.round(data.min_temp),
        unit: '°C',
    },
];

export default currentDayForecast;
