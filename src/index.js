require('dotenv').config()
const exceljs = require('exceljs')

const getWorkBook = (path) => {
    return Promise((resolve, reject) => {
        new exceljs.Workbook().xlsx.readFile(path).then((value) => resolve(value)).catch((reason) => reject(reason))
    })
}

const selectWorksheet = (workbook, numberWorkSheet) => {
    return workbook.getWorksheet(numberWorkSheet)
}

const getRows = (worksheet, start, lengthWorksheet) => {
    return worksheet.getRows(start, lengthWorksheet)
}

exports.module = {
    getWorkBook,
    selectWorksheet,
    getRows
}




// '/home/adolfo/work/acid/cenco/resynchro/Cruce Prod No Existe VTEX (777).xlsx'