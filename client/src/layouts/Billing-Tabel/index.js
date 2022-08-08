import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Grid from "@mui/material/Grid";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

const columns = [
  { id: 'date', label: 'Date', minWidth: 100 },
  { id: 'team', label: 'Team', minWidth: 150 },
  { id: 'batch', label: 'Batch', minWidth: 150 },
  { id: 'aannotation', label: 'Annotation', minWidth: 100 },
  { id: 'aqc', label: 'QC', minWidth: 100 },
  { id: 'apmsme', label: 'PM + SME', minWidth: 100  },
  { id: 'atotal', label: 'Total', minWidth: 100 },
  { id: 'hannotation', label: 'Annotation', minWidth: 100 },
  { id: 'hqc', label: 'QC', minWidth: 100 },
  { id: 'hpmsme', label: 'PM + SME', minWidth: 100 },
  { id: 'hprojectTraning', label: 'Project Traning', minWidth: 100 },
  { id: 'hojt', label: 'OJT', minWidth: 100},
  { id: 'hqualityfeedback', label: 'Quality Feedback', minWidth: 100 },
  { id: 'hidleHours', label: 'Idle Hours', minWidth: 100 },
  { id: 'hother', label: 'Other', minWidth: 100},
  { id: 'hcomments', label: 'Comments', minWidth: 100 },
  { id: 'htotal', label: 'Total', minWidth: 100},
  { id: 'jannotation', label: 'Annotation', minWidth: 100 },
  { id: 'jqc', label: 'QC', minWidth: 100 },
  { id: 'jtotal', label: 'Total', minWidth: 100},
  { id: 'action', label: 'Action', minWidth: 100 },
  // { id: 'jtotal', label: 'Total', minWidth: 100, format: (value) => value.toLocaleString('en-US'), },

  
];

function createData(date,team,batch,aannotation, aqc, apmsme,atotal,hannotation, hqc, hpmsme,hprojectTraning,hojt,hqualityfeedback,hidleHours,hother,hcomments,htotal,jannotation,jqc,jtotal) {
//   const density = population / size;
  return {date,team,batch,aannotation, aqc, apmsme,atotal,hannotation, hqc, hpmsme,hprojectTraning,hojt,hqualityfeedback,hidleHours,hother,hcomments,htotal,jannotation,jqc,jtotal };
}

const rows = [
  createData("05/08/2022","dumbeldore","batch2","220", "50", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"),
  createData("06/08/2022","nala","batch2","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"),
  createData("07/08/2022","Annatol","batch2","220", "56", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"),
  createData("08/08/2022","Annatol","batch2","220", "56", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"),
  createData("09/08/2022","Annatol","batch2","220", "56", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"), 
  createData("10/08/2022","Annatol","batch2","220", "56", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"),
  createData("11/08/2022","Annatol","batch2","220", "56", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"),
  createData("12/08/2022","Annatol","batch2","220", "56", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"),
  createData("13/08/2022","Annatol","batch2","220", "56", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"),

];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <DashboardLayout>
    <DashboardNavbar />
    <Grid item xs={12} mt={1} mb={10}>
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 740 }}>
        <Table>
          <TableHead sx={{display: "table-header-group !important"}}>
            <TableRow>
              <TableCell align="center" colSpan={4}>
              Count of associates					
              </TableCell>
              <TableCell align="center" colSpan={10}>
              Total hours spent						
              </TableCell>
              <TableCell align="center" colSpan={3}>
              Total jobs worked on							
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.aqc}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {/* {column.format && typeof value === 'number'
                            ? column.format(value) */}
                        { value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Grid>
       <Footer />
       </DashboardLayout>
  );
}
