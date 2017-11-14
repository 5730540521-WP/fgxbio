from openpyxl import load_workbook
import os

all_File = os.listdir()
file = open("SQLcommand.txt", "w")


for xl in all_File:
    if(xl[-4:] == 'xlsx'):
        wb = load_workbook(filename = xl)

        # Autosomal STRs Part
        sheet_ranges = wb['Autosomal STRs']
        last_row = 47;
        while(sheet_ranges['A' + str(last_row)].value != None):
            last_row += 1

        for x in range(47,last_row):
            xs = str(x)
            A = 'A' + xs
            B = 'B' + xs
            D = 'D' + xs
            E = 'E' + xs
            file.write("INSERT INTO `fxbio`.`ngs_data` (`Sample_ID`, `Sample_Year`, `DataType`, `Locus`, `Allele`, `Read_Count`, `Sequence`) VALUES ('" + xl[0:5] + "', '59', 'A', ")
            file.write("'" + sheet_ranges[A].value + "', '" + str(sheet_ranges[B].value) + "', '" + str(sheet_ranges[D].value) + "', '" + str(sheet_ranges[E].value + "');" +'\n'))

        # Y STRs Part
        sheet_ranges = wb['Y STRs']
        last_row = 43;
        while (sheet_ranges['A' + str(last_row)].value != None):
            last_row += 1

        for x in range(43, last_row):
            xs = str(x)
            A = 'A' + xs
            B = 'B' + xs
            D = 'D' + xs
            E = 'E' + xs
            file.write(
                "INSERT INTO `fxbio`.`ngs_data` (`Sample_ID`, `Sample_Year`, `DataType`, `Locus`, `Allele`, `Read_Count`, `Sequence`) VALUES ('" + xl[
                                                                                                                                                   0:5] + "', '59', 'Y', ")
            file.write("'" + sheet_ranges[A].value + "', '" + str(sheet_ranges[B].value) + "', '" + str(
                sheet_ranges[D].value) + "', '" + str(sheet_ranges[E].value + "');" + '\n'))

        # X STRs Part
        sheet_ranges = wb['X STRs']
        last_row = 26;
        while (sheet_ranges['A' + str(last_row)].value != None):
            last_row += 1

        for x in range(26, last_row):
            xs = str(x)
            A = 'A' + xs
            B = 'B' + xs
            D = 'D' + xs
            E = 'E' + xs
            file.write(
                "INSERT INTO `fxbio`.`ngs_data` (`Sample_ID`, `Sample_Year`, `DataType`, `Locus`, `Allele`, `Read_Count`, `Sequence`) VALUES ('" + xl[
                                                                                                                                                   0:5] + "', '59', 'X', ")
            file.write("'" + sheet_ranges[A].value + "', '" + str(sheet_ranges[B].value) + "', '" + str(
                sheet_ranges[D].value) + "', '" + str(sheet_ranges[E].value + "');" + '\n'))

file.close()


