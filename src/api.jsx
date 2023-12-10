

// const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '0a59d62f8amsh790cedfc5c9dbd4p11cdbdjsnb6ce7b673a02',
// 		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }










export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0a59d62f8amsh790cedfc5c9dbd4p11cdbdjsnb6ce7b673a02',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "74287d4cffbf35f3ca7e63acdcab9fdd";

// async function getapi(inputValue){

//     try {
//         const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, options);
//         const result = await response.json().then((result) => {
//             return {
//                 options: result.data.map((city) => {
//                   return {
//                     value: `${city.latitude} ${city.longitude}`,
//                     label: `${city.name}, ${city.countryCode}`,
//                   };
//                 }),
//               };
//         })
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// export default getapi
// .....................///

