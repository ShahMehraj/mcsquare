from openpyxl import Workbook

# Create a new workbook and select the active worksheet
wb = Workbook()
ws = wb.active

# Given numbers
numbers = [5000, 200, 2500, 4480, 1040, 3000, 550, 150, 5000, 165, 150, 1175, 200, 
           600, 130, 87, 200, 4000, 50, 600, 350, 500, 170, 3000, 500]

# Write numbers to the first row
for col, num in enumerate(numbers, start=1):
    ws.cell(row=1, column=col, value=num)

# Save the workbook
wb.save("numbers.xlsx")

print("Excel file 'numbers.xlsx' created successfully.")
