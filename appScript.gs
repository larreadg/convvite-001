const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1rgvTzWFwyKy5F1b1udlDU0a5OY-FZu4X9GrprpbfUhg/edit?usp=sharing");
//if you have changed your sheet name then replace the below Sheet1 with your sheet name
const sheet = sheets.getSheetByName("Hoja 1");
function doPost(e){
  let data = e.parameter;
  sheet.appendRow([data.Persona,data.Asistencia,data.Adultos, data.Jovenes]);
  return ContentService.createTextOutput(JSON.stringify({ status : 0, message: 'Registro guardado' }));
}

function doGet(e) {
  let data = e.parameter;
  let persona = data.Persona;
  let range = sheet.getDataRange();
  let values = range.getValues();
  
  for (let i = 0; i < values.length; i++) {
    if (values[i][0] == persona) {
      let result = {
        "Persona": values[i][0],
        "Asistencia": values[i][1],
        "Adultos": values[i][2],
        "Jovenes": values[i][3]
      };
      return ContentService.createTextOutput(JSON.stringify({ status : 0, message: 'Registro encontrado', data: result }));
    }
  }
  
  return ContentService.createTextOutput(JSON.stringify({ status : -1, message: 'Registro no encontrado', data: null }));
}