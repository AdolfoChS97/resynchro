import express, { Express, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import { ExcelJS } from './../modules/excel';
const upload = multer({ dest: 'uploads/' });
const app: Express = express();

app.post("/sync", upload.single('file'), (req: Request, res: Response) => {
    // const {} = req.body
    const exceljs = new ExcelJS();
    exceljs.readFile(path.resolve(req.file!.originalname))
        .then((workbook) => {
            exceljs.getWorkSheetByWorkBook();
            exceljs.getRowsByWorkSheet();
            console.log(exceljs.getRowsByWorkSheet());
        })
        .catch((reason) => console.log(reason)); 
    res.status(200).json({ message: "res" })
});

export default app 