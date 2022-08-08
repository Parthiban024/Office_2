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
import axios from "axios";
import moment from "moment";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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

const rowData = [];

axios.get("/billing/")
.then((res)=>rowData[res.data])
.catch(err=>console.log(err))
console.log(rowData)
// const rows = [
//   createData("05/08/2022","dumbeldore","batch2","220", "50", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"),
//   createData("06/08/2022","nala","batch2","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"),
//   createData("07/08/2022","Annatol","batch2","220", "56", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"),
//   createData("08/08/2022","Annatol","batch2","220", "56", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"),
//   createData("09/08/2022","Annatol","batch2","220", "56", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"), 
//   createData("10/08/2022","Annatol","batch2","220", "56", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"),
//   createData("11/08/2022","Annatol","batch2","220", "56", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"),
//   createData("12/08/2022","Annatol","batch2","220", "56", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"),
//   createData("13/08/2022","Annatol","batch2","220", "56", "33","220", "54", "33","220", "54", "33","220", "54", "33","220", "54", "33","22","23"),

// ];
const rows = [
  rowData.map((item,index)=>{
    createData(item.reportDate,item.team,item.batch,item.associated.annotation,item.associated.qc,item.associated.pm,
      item.associated.total,item.hours.annotation,item.hours.qc,item.hours.pm,item.hours.training,item.hours.otj,
      item.hours.qcFeedback,item.hours.other,item.hours.total,item.jobs.annotation,item.jobs.qc,
      item.jobs.total)
  })
]

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data,setData] = React.useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  React.useEffect(()=>{
    axios.get("/billing/")
    .then((res)=>setData(res.data))
    .catch(err=>console.log(err))
  },[])

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
            <TableCell align="center" colSpan={3}>		
              </TableCell>
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
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item,index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {/* {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                        { value}
                        </TableCell>
                      );
                    })} */}
                    <TableCell>
                      {moment(item.reportDate).format("DD/MM/YYYY")}
                    </TableCell>
    <TableCell>{item.team}</TableCell>
    <TableCell>{item.batch}</TableCell>
    <TableCell>{item.associated.annotation}</TableCell>
    <TableCell>{item.associated.qc}</TableCell>
    <TableCell>{item.associated.pm}</TableCell>
    <TableCell>{item.associated.total}</TableCell>
    <TableCell>{item.hours.annotation}</TableCell>
    <TableCell>{item.hours.qc}</TableCell>
    <TableCell>{item.hours.pm}</TableCell>
    <TableCell>{item.hours.training}</TableCell>
    <TableCell>{item.hours.ojt}</TableCell>
    <TableCell>{item.hours.qcFeedback}</TableCell>
    <TableCell>{item.hours.idle}</TableCell>
    <TableCell>{item.hours.other}</TableCell>
    <TableCell>{item.hours.comments}</TableCell>
    <TableCell>{item.hours.total}</TableCell>
    <TableCell>{item.jobs.annotation}</TableCell>
    <TableCell>{item.jobs.qc}</TableCell>
    <TableCell>{item.jobs.total}</TableCell>
    <TableCell><EditIcon/> | <DeleteForeverIcon/> </TableCell>
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
