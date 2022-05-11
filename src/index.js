require('dotenv').config();
const exceljs = require('exceljs');

(() => {
    new exceljs.Workbook().xlsx.readFile(process.env.XLSX_FILE_PATH).then((workbook) => {
        const rows = workbook.getWorksheet(1).getRows(1, workbook.getWorksheet(1).rowCount)
        rows.forEach((row) => {
            let sku = row.values.splice(1,1).shift()
            // if(sku) // Requests to VTEX
        })
    }).catch((reason) => {
        console.log(reason)
    })
})();