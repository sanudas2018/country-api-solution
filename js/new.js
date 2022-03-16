const url = 'https://restcountries.com/v3.1/all';
const loadCountry = () => {
   fetch(url)
      .then(Response => Response.json())
      .then(data => displayCountries(data))

};
const displayCountries = (countries) => {
   console.log(countries)
   const allCountriesHTML = countries.map(country => getCountryHTML(country));
   const main = document.getElementById('countrys');
   main.innerHTML = allCountriesHTML.join(' ');


   
};
const getCountryHTML = (country) => {
   return `
      <div class='country'>
         <img src='${country.flags.png}'> 
         <h2>${country.name.common}</h2>
      </div>
   `;
};



loadCountry();
