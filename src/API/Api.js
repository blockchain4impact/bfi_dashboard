import axios from 'axios';
import Papa from 'papaparse';

const instance = axios.create({
  baseURL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQBrQsi6vVUbzDL75J-pTqRG-5QuU94OM8j6Hv1oEHty9Lpqsybk8vscRPfeiRnOg/pub?output=csv'
});

const fetchData = async () => {
  try {
    const response = await instance.get();
    const data = parseCsv(response.data)
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
const parseCsv = (csvString) => {
  const { data, errors, meta } = Papa.parse(csvString, {
    header: true, // Treat the first row as headers
  });

  if (errors.length > 0) {
    console.error('CSV parsing error:', errors);
    return [];
  }

  return data;
};


export { fetchData };