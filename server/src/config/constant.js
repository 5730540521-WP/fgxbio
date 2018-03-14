const mysql = require('mysql')

const InvestigatorIDplex = ['CSF1PO', 'D13S317', 'D16S539', 'D18S51', 'D21S11', 'D3S1358', 'D5S818', 'D7S820', 'D8S1179', 'FGA', 'TH01', 'TPOX', 'vWA', 'D2S1338', 'D19S433']
const Powerplex16 = ['CSF1PO', 'D13S317', 'D16S539', 'D18S51', 'D21S11', 'D3S1358', 'D5S818', 'D7S820', 'D8S1179', 'FGA', 'TH01', 'TPOX', 'vWA', 'Penta D', 'Penta E']
const Powerplex18D = ['CSF1PO', 'D13S317', 'D16S539', 'D18S51', 'D21S11', 'D3S1358', 'D5S818', 'D7S820', 'D8S1179', 'FGA', 'TH01', 'TPOX', 'vWA', 'D2S1388', 'D19S433', 'Penta D', 'Penta E']
const AmpFLSTR_Identifiler_Plus = ['CSF1PO', 'D13S317', 'D16S539', 'D18S51', 'D21S11', 'D3S1358', 'D5S818', 'D7S820', 'D8S1179', 'FGA', 'TH01', 'TPOX', 'vWA', 'D2S1338', 'D19S433']
const Verifiler_Express = ['CSF1PO', 'D13S317', 'D16S539', 'D18S51', 'D21S11', 'D3S1358', 'D5S818', 'D7S820', 'D8S1179', 'FGA', 'TH01', 'TPOX', 'vWA', 'D2S1338', 'D19S433', 'Penta D', 'Penta E', 'D10S1248', 'D1S1656', 'D12S391', 'D2S441', 'D22S1045', 'D6S1043']
const Globalfiler = ['CSF1PO', 'D13S317', 'D16S539', 'D18S51', 'D21S11', 'D3S1358', 'D5S818', 'D7S820', 'D8S1179', 'FGA', 'TH01', 'TPOX', 'vWA', 'D2S1338', 'D19S433', 'D10S1248', 'D1S1656', 'D12S391', 'D2S441', 'D22S1045', 'SE33']
const Forenseq = ['CSF1PO', 'D13S317', 'D16S539', 'D18S51', 'D21S11', 'D3S1358', 'D5S818', 'D7S820', 'D8S1179', 'FGA', 'TH01', 'TPOX', 'vWA', 'D2S1338', 'D19S433', 'Penta D', 'Penta E', 'D10S1248', 'D1S1656', 'D12S391', 'D2S441', 'D22S1045', 'D6S1043', 'D17S1301', 'D20S482', 'D4S2408', 'D9S1122']


const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Uq42=Tc8",
  database: "fxbio"
})

module.exports = con