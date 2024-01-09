import countryOptions from '../../data/countries.json';

const COLORS = [
  '#2540cc',
  '#a525cc',
  '#25abcc',
  '#54cc25',
  '#cc2562',
  '#cc7925',
  '#c6cc25',
  '#91918e',
];

export function compileCountryStatsFromUsers(users) {
  const initialValues = {};
  countryOptions.forEach(
    (country, index) =>
      (initialValues[country] = {
        title: country,
        label: country,
        value: 0,
        color: COLORS[index],
      })
  );
  const usersByCountry = users.reduce((byCountry, user) => {
    byCountry[user.country].value += 1;
    return byCountry;
  }, initialValues);
  return Object.values(usersByCountry);
}
