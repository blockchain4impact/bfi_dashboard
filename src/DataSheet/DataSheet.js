import React from 'react'
import axios from 'axios'

// export default function DataSheet() {
//     const [csvData, setCsvData] = useState([]);
//     useEffect(() => {
//       fetchCSVData();
//     }, []);
//     const fetchCSVData = () => {
//         const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ__zK3Usg5WZvsLXNzBLVrhad3P7iiHjhcPxuu_whBbyr4kZGxe5mWl7sisFCSmJ6bzfQWEWpzdwXO/pub?output=csv'; // Replace with your Google Sheets CSV file URL
//         axios.get(csvUrl)
//             .then((response) => {
//                 const parsedCsvData = parseCSV(response.data);
//                 setCsvData(parsedCsvData);
//                 console.log(parsedCsvData);
//             })
//             .catch((error) => {
//                 console.error('Error fetching CSV data:', error);
//             });
//     }
//     return (
//         <div>DataSheet</div>
//     )
// }

export function DataSheet(){}