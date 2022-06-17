# Endpoint

## Current

- URL
  - /current/?key="WEATHERBIT_KEY"
- Method
  - GET
- Parameters
  - key = weatherbit key
- Respone

  ```json
  {
  "data": {
      "current": [
          {
              "aqi": 259,
              "city": "Serang",
              "co": 1842.5,
              "lat": -6.12,
              "lon": 106.15,
              "no2": 19.5354,
              "o3": 85.1154,
              "pm10": 154.762,
              "pm25": 137.529,
              "so2": 5.00679
          },
          {
              "aqi": 162,
              "city": "Bandung",
              "co": 1348.5,
              "lat": -6.92,
              "lon": 107.61,
              "no2": 26.39,
              "o3": 92.9832,
              "pm10": 74.014,
              "pm25": 64.2349,
              "so2": 15.0204
          },
          ...
      ]
    }
  }
  ```

## History & Prediction air quality by latitude longitude

- URL
  - /by_location?lat="LATITUDE"&lon="LONGITUDE"&key="WEATHERBIT_KEY"
- Method
  - GET
- Parameter
  - lat = latitude
  - long = longitude
  - key = weatherbit key
- Response
  ```json
  {
    "data": {
      "forecast": [
        {
          "aqi": 35.63230514526367,
          "co": 250.86363220214844,
          "datetime": "2022-06-10 15:00:00",
          "no2": 1.7819881439208984,
          "o3": 80.52020263671875,
          "pm10": 6.425139904022217,
          "pm25": 4.549275875091553,
          "so2": 0.6959050893783569
        },
        {
          "aqi": 35.75181579589844,
          "co": 253.9100799560547,
          "datetime": "2022-06-10 14:00:00",
          "no2": 1.8818491697311401,
          "o3": 80.3956527709961,
          "pm10": 6.713098049163818,
          "pm25": 4.722179889678955,
          "so2": 0.7107279896736145
        },
        {
          "aqi": 36.89277648925781,
          "co": 260.11260986328125,
          "datetime": "2022-06-10 13:00:00",
          "no2": 1.966313123703003,
          "o3": 79.4944076538086,
          "pm10": 6.969505310058594,
          "pm25": 4.887365341186523,
          "so2": 0.7187684774398804
        }
      ],
      "history": [
        {
          "aqi": 36.0,
          "co": 256.67,
          "datetime": "2022-06-10 12:00:00",
          "no2": 2.8,
          "o3": 78.0,
          "pm10": 6.49,
          "pm25": 4.69,
          "so2": 0.58
        },
        {
          "aqi": 34.0,
          "co": 245.89,
          "datetime": "2022-06-10 11:00:00",
          "no2": 2.39,
          "o3": 74.0,
          "pm10": 5.48,
          "pm25": 4.04,
          "so2": 0.79
        },
        {
          "aqi": 34.0,
          "co": 235.1,
          "datetime": "2022-06-10 10:00:00",
          "no2": 1.99,
          "o3": 72.67,
          "pm10": 4.47,
          "pm25": 3.39,
          "so2": 0.99
        },
        {
          "aqi": 32.0,
          "co": 224.32,
          "datetime": "2022-06-10 09:00:00",
          "no2": 1.58,
          "o3": 70.0,
          "pm10": 3.46,
          "pm25": 2.74,
          "so2": 1.2
        },
        {
          "aqi": 32.0,
          "co": 225.83,
          "datetime": "2022-06-10 08:00:00",
          "no2": 1.46,
          "o3": 70.0,
          "pm10": 3.66,
          "pm25": 2.91,
          "so2": 1.19
        },
        {
          "aqi": 29.0,
          "co": 227.35,
          "datetime": "2022-06-10 07:00:00",
          "no2": 1.34,
          "o3": 63.28,
          "pm10": 3.86,
          "pm25": 3.08,
          "so2": 1.18
        }
      ]
    }
  }
  ```

## History & Prediction air quality by city

- URL
  - /by_city?city="CITY_NAME"&key="WEATHERBIT_KEY"
- Method
  - GET
- Parameter
  - city = city name
  - key = weatherbit key
- Response

```json
{
  "data": {
    "forecast": [
      {
        "aqi": 35.63230514526367,
        "co": 250.86363220214844,
        "datetime": "2022-06-10 15:00:00",
        "no2": 1.7819881439208984,
        "o3": 80.52020263671875,
        "pm10": 6.425139904022217,
        "pm25": 4.549275875091553,
        "so2": 0.6959050893783569
      },
      {
        "aqi": 35.75181579589844,
        "co": 253.9100799560547,
        "datetime": "2022-06-10 14:00:00",
        "no2": 1.8818491697311401,
        "o3": 80.3956527709961,
        "pm10": 6.713098049163818,
        "pm25": 4.722179889678955,
        "so2": 0.7107279896736145
      },
      {
        "aqi": 36.89277648925781,
        "co": 260.11260986328125,
        "datetime": "2022-06-10 13:00:00",
        "no2": 1.966313123703003,
        "o3": 79.4944076538086,
        "pm10": 6.969505310058594,
        "pm25": 4.887365341186523,
        "so2": 0.7187684774398804
      }
    ],
    "history": [
      {
        "aqi": 36.0,
        "co": 256.67,
        "datetime": "2022-06-10 12:00:00",
        "no2": 2.8,
        "o3": 78.0,
        "pm10": 6.49,
        "pm25": 4.69,
        "so2": 0.58
      },
      {
        "aqi": 34.0,
        "co": 245.89,
        "datetime": "2022-06-10 11:00:00",
        "no2": 2.39,
        "o3": 74.0,
        "pm10": 5.48,
        "pm25": 4.04,
        "so2": 0.79
      },
      {
        "aqi": 34.0,
        "co": 235.1,
        "datetime": "2022-06-10 10:00:00",
        "no2": 1.99,
        "o3": 72.67,
        "pm10": 4.47,
        "pm25": 3.39,
        "so2": 0.99
      },
      {
        "aqi": 32.0,
        "co": 224.32,
        "datetime": "2022-06-10 09:00:00",
        "no2": 1.58,
        "o3": 70.0,
        "pm10": 3.46,
        "pm25": 2.74,
        "so2": 1.2
      },
      {
        "aqi": 32.0,
        "co": 225.83,
        "datetime": "2022-06-10 08:00:00",
        "no2": 1.46,
        "o3": 70.0,
        "pm10": 3.66,
        "pm25": 2.91,
        "so2": 1.19
      },
      {
        "aqi": 29.0,
        "co": 227.35,
        "datetime": "2022-06-10 07:00:00",
        "no2": 1.34,
        "o3": 63.28,
        "pm10": 3.86,
        "pm25": 3.08,
        "so2": 1.18
      }
    ]
  }
}
```

## History & Prediction weather by lotitude & longitude

- URL
  - /w_by_location?lat="LATITUDE"&lon="LONGITUDE"&key="WEATHERBIT_KEY"
- Method
  - GET
- Parameter
  - lat = latitude
  - long = longitude
  - key = weatherbit key
- Response

```json
{
  "data": {
    "forecast": [
      {
        "datetime": "2022-06-15 07:00:00",
        "rh": 88.6039810180664,
        "temp": 24.344493865966797,
        "wind_spd": 1.1674940586090088
      },
      {
        "datetime": "2022-06-15 08:00:00",
        "rh": 88.64962768554688,
        "temp": 24.27583122253418,
        "wind_spd": 1.1412063837051392
      },
      {
        "datetime": "2022-06-15 09:00:00",
        "rh": 88.66068267822266,
        "temp": 24.233928680419922,
        "wind_spd": 1.120360255241394
      }
    ],
    "history": [
      {
        "datetime": "2022-06-15 06:00:00",
        "rh": 88.0,
        "temp": 24.0,
        "wind_spd": 1.0
      },
      {
        "datetime": "2022-06-15 05:00:00",
        "rh": 88.0,
        "temp": 25.0,
        "wind_spd": 1.0
      },
      {
        "datetime": "2022-06-15 04:00:00",
        "rh": 88.0,
        "temp": 26.0,
        "wind_spd": 1.0
      }
    ]
  }
}
```

## History & Prediction weather by city

- URL
  - /w_by_city?city="CITY_NAME"&key="WEATHERBIT_KEY"
- Method
  - GET
- Parameter
  - city = city name
  - key = weatherbit key
- Response

```json
{
  "data": {
    "forecast": [
      {
        "datetime": "2022-06-15 07:00:00",
        "rh": 88.6039810180664,
        "temp": 24.344493865966797,
        "wind_spd": 1.1674940586090088
      },
      {
        "datetime": "2022-06-15 08:00:00",
        "rh": 88.64962768554688,
        "temp": 24.27583122253418,
        "wind_spd": 1.1412063837051392
      },
      {
        "datetime": "2022-06-15 09:00:00",
        "rh": 88.66068267822266,
        "temp": 24.233928680419922,
        "wind_spd": 1.120360255241394
      }
    ],
    "history": [
      {
        "datetime": "2022-06-15 06:00:00",
        "rh": 88.0,
        "temp": 24.0,
        "wind_spd": 1.0
      },
      {
        "datetime": "2022-06-15 05:00:00",
        "rh": 88.0,
        "temp": 25.0,
        "wind_spd": 1.0
      },
      {
        "datetime": "2022-06-15 04:00:00",
        "rh": 88.0,
        "temp": 26.0,
        "wind_spd": 1.0
      }
    ]
  }
}
```