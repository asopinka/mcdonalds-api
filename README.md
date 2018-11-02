# McDonald's Location API

Use this API wrapper to easily grab nearby McDonald's locations based on a given latitude and longitude.

## Requirements

- Node v8 or higher

## Install

`yarn add mcdonalds-api`  

OR  

`npm install mcdonalds-api --save`

## Usage

```javascript
const McDonaldsApi = require('mcdonalds-api')(<REGION>)

const getLocations = async (latitude, longitude, radius, count) => {
	const locations = await McDonaldsApi.getLocations(latitude, longitude, radius, count)
	
	/* DO ANY MANIPULATION TO THE RESULTS HERE */
	
	return locations
}
```

### Parameters

For `<REGION>`, be sure to use any of the following 2-letter countries. Each country is divided into its continent(s) and sorted from highest number of McDonald's restaurants to lowest.

When calling `getLocations` include a latitude, a longitude, the radius around that point you would like to search, and the count of results you would like back.

### North America

- CA (Canada)
- US (United States)

### South/Latin America
- BR (Brazil)
- MX (Mexico)
- AR (Argentina)
- VE (Venezuela)
- PR (Puerto Rico)
- GT (Guatemala)
- CO (Colombia)
- CL (Chile)
- PA (Panama)
- CR (Costa Rica)
- PE (Peru)
- DO (Dominican Republic)
- EC (Ecuador)
- UY (Uruguay)
- SV (El Salvador)
- PY (Paraguay)
- HN (Honduras)
- MQ (Martinique)
- GP (Guadeloupe)
- VI (U.S. Virgin Islands)
- TT (Trinidad and Tobago)
- NI (Nicaragua)
- CW (Curacao)
- AW (Aruba)
- BS (Bahamas)
- SR (Suriname)
- GF (French Guiana)

### Europe
- DE (Germany)
- FR (France)
- GB (United Kingdom)
- RU (Russia)
- IT (Italy)
- ES (Spain)
- PL (Poland)
- TR (Turkey)
- NL (Netherlands)
- SE (Sweden)
- AT (Austria)
- IL (Israel)
- CH (Switzerland)
- PT (Portugal)
- CZ (Czech Republic)
- IE (Ireland)
- DK (Denmark)
- HU (Hungary)
- UA (Ukraine)
- BE (Belgium)
- NO (Norway)
- RO (Romania)
- FI (Finland)
- BG (Bulgaria)
- RS (Serbia)
- SK (Slovakia)
- SI (Slovenia)
- GR (Greece)
- CY (Cyprus)
- BY (Belarus)
- GE (Georgia)
- LT (Lithuania)
- LV (Latvia)
- LU (Luxembourg)
- EE (Estonia)
- MT (Malta)
- AD (Andorra)
- MD (Moldova)
- BA (Bosnia and Herzegovina)
- MC (Monaco)
- LI (Liechtenstein)
- JE (Jersey)
- IM (Isle of Man)
- SM (San Marino)
- GI (Gibraltar)


### Asia & Pacific
- JP (Japan)
- CN (China)
- AU (Australia)
- PH (Philippines)
- KR (South Korea)
- TW (Taiwan)
- IN (India)
- MY (Malaysia)
- TH (Thailand)
- HK (Hong Kong)
- ID (Indonesia)
- NZ (New Zealand)
- SG (Singapore)
- PK (Pakistan)
- MO (Macau)
- VN (Vietnam)
- AZ (Azerbaijan)
- KZ (Kazakhstan)
- LK (Sri Lanka)
- GU (Guam)
- PF (French Polynesia)
- FJ (Fiji)
- RE (Reunion)
- BN (Brunei)
- MP (Northern Mariana Islands)
- NC (New Caledonia)
- AS (American Samoa)
- WS (Samoa)


### Arab States
- SA (Saudi Arabia)
- AE (United Arab Emirates)
- EG (Egypt)
- KW (Kuwait)
- QA (Qatar)
- MA (Morocco)
- JO (Jordan)
- OM (Oman)
- BH (Bahrain)
- LB (Lebanon)


### Africa
- ZA (South Africa)
- MU (Mauritius)

# License

Copyright 2018 Alex Sopinka

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
