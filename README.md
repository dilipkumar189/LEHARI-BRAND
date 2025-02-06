# LEHARI BRAND
The Wall Clock Company



Create a shadcn table in vite , add filter icon on every column, when click on that filter icon then open a model(filter dialog) to filter the row based on <=, >=, start with, end with and more.   Use vite.jsx and shadcn with perfect working


I've created a comprehensive data table component with filtering capabilities. Here's what's included:

A table component using shadcn/ui's Table components
Filter functionality for each column with a filter icon
A filter dialog that opens when clicking the filter icon
Multiple filter operators:
Equals
Contains
Starts with
Ends with
Greater than
Less than
Sample data with employee information
Real-time filtering based on selected criteria
Support for multiple active filters
The table is fully functional and styled using Tailwind CSS. You can:

Click the filter icon on any column to open the filter dialog
Select different operators based on the column type
Enter filter values
Apply multiple filters across different columns
See the filtered results update in real-time
The implementation uses React's useMemo for performance optimization when filtering the data. The filters are stored in state and can be updated or removed as needed.