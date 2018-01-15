'''this file is use for generating the insert query
for the second set of excel data because the filename format
is differ from the first set

1st          2nd
032F         58D008-F
'''

from openpyxl import load_workbook
import os

all_File = os.listdir()
file = open("SQLcommand2.txt", "w")


for xl in all_File:
    if(xl[-4:] == 'xlsx'):
        wb = load_workbook(filename = xl)

        # Autosomal STRs Part
        sheet_ranges = wb['Autosomal STRs']
        current_row = 47;

        while(sheet_ranges['A' + str(current_row)].value != None):
            xs = str(current_row)
            A = 'A' + xs
            B = 'B' + xs
            D = 'D' + xs
            E = 'E' + xs
            current_row += 1
            if(sheet_ranges['C' + xs].value == 'Yes'):
                file.write("INSERT INTO `fxbio`.`ngs_data` (`Sample_ID`, `Sample_Year`, `DataType`, `Locus`, `Allele`, `Read_Count`, `Sequence`) VALUES ('" + xl[2:8] + "', '" + xl[0:2] + "', 'A', ")
                file.write("'" + sheet_ranges[A].value + "', '" + str(sheet_ranges[B].value) + "', '" + str(sheet_ranges[D].value) + "', '" + str(sheet_ranges[E].value + "');" +'\n'))

        # Y STRs Part
        sheet_ranges = wb['Y STRs']
        current_row = 43

        while(sheet_ranges['A' + str(current_row)].value != None):
            xs = str(current_row)
            A = 'A' + xs
            B = 'B' + xs
            D = 'D' + xs
            E = 'E' + xs
            current_row += 1
            if(sheet_ranges['C' + xs].value == 'Yes'):
                file.write("INSERT INTO `fxbio`.`ngs_data` (`Sample_ID`, `Sample_Year`, `DataType`, `Locus`, `Allele`, `Read_Count`, `Sequence`) VALUES ('" + xl[2:8] + "', '" + xl[0:2] + "', 'Y', ")
                file.write("'" + sheet_ranges[A].value + "', '" + str(sheet_ranges[B].value) + "', '" + str(sheet_ranges[D].value) + "', '" + str(sheet_ranges[E].value + "');" + '\n'))

        # X STRs Part
        sheet_ranges = wb['X STRs']
        current_row = 26

        while(sheet_ranges['A' + str(current_row)].value != None):
            xs = str(current_row)
            A = 'A' + xs
            B = 'B' + xs
            D = 'D' + xs
            E = 'E' + xs
            current_row += 1
            if(sheet_ranges['C' + xs].value == 'Yes'):
                file.write("INSERT INTO `fxbio`.`ngs_data` (`Sample_ID`, `Sample_Year`, `DataType`, `Locus`, `Allele`, `Read_Count`, `Sequence`) VALUES ('" + xl[2:8] + "', '" + xl[0:2] + "', 'X', ")
                file.write("'" + sheet_ranges[A].value + "', '" + str(sheet_ranges[B].value) + "', '" + str(sheet_ranges[D].value) + "', '" + str(sheet_ranges[E].value + "');" + '\n'))

file.close()
