import exceljs, { Workbook, Worksheet } from 'exceljs';

export class ExcelJS {
    
    public workbook: Workbook | undefined
    public worksheet: Worksheet | undefined = undefined

    constructor(){
        this.workbook = new exceljs.Workbook(); 
    }

    readFile(path: string): Promise<Workbook> | Promise<any> {
        return new Promise((resolve, reject) => {
            this.workbook?.xlsx.readFile(path).then((value: Workbook) => resolve(value)).catch((reason) => reject(reason));
        })
    }

    getWorkSheetByWorkBook(index: number = 1): void {
        this.worksheet = this.workbook?.getWorksheet(index);
    }

    getRowsByWorkSheet(start: number = 1): exceljs.Row[] | undefined {
        return this.worksheet?.getRows(start, this.worksheet.rowCount);
    }

}