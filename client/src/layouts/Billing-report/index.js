import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useMemo } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import TextField from "@mui/material/TextField";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Autocomplete from "@mui/material/Autocomplete";
// import { useSelect } from "@mui/base";

function Report() {
  // const { columns, rows } = authorsTableData();
 const [bill,setBill] = React.useState({
  tDate:'',
  team:'',
  batch:'',
  associated:{
    annotation:0,
    qc:0,
    pmsme:0,
    total:0,
  },
  hours:{
    annotation:0,
    qc:0,
    pmsme:0,
    projecttraning:0,
    ojt:0,
    qualityannotator:0,
    idelhours:0,
    other:0,
    comments:'',
    total:0,
  },
  jobs:{
    annotation:0,
    qc:0,
    total:0,
  },
  
    
  });
  // const onChange = e => {
  //   let data = { ...bill };
  //   let name = e.target.name;
  //   let val = e.target.value;
  //   if (name == 'username' || name == 'email') {
  //     data = { ...data, [name]: val };
  //   } else if (name == 'state' || name == 'city') {
  //     data = {
  //       ...data,
  //       address: {
  //         ...data.address,
  //         [name]: val
  //       }
  //     };
  //   } else if (name == 'lat' || name == 'long') {
  //     data = {
  //       ...data,
  //       address: {
  //         ...data.address,
  //         geolocation: {
  //           ...data.address.geolocation,
  //           [name]: val
  //         }
  //       }
  //     };
  //   }
  //   setBill(data);
  // };
  const submit = e => {
    e.preventDefault();
   
    console.log(JSON.stringify(bill));
  };
  
  // const [values, setValues] = useState({ tDate: "",team: "",batch: ""});
  // const [report, setReport] = useState([]);
  const [teamList, setTeamList] = useState(null);
  // const empId = useSelector((state) => state.auth.user.empId);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setBill({
      ...bill,
      [name]: value,
      team:teamList,
    });
  };
  const handleTeamChange = (event, value) => setTeamList(value);
  // const [show, setShow] = useState(false);
  // const submit = (e) => {
  //   e.preventDefault();
  //   const userData = {
  //     tDate: values.tDate,
  //     team: teamList,
  //     batch:values.batch,
  //   };
  //   console.log(userData);
  // };
  const list = [
    "Dumbledore",
    "Gandalf",
    "Honeydew_Image Classification",
    "Longon",
    "Mango_Autonomy",
    "Mango_Obstacles",
    "Mango_Soybeans",
    "Neo Segmentation",
    "Pomelo",
    "Rambutan_Traffic Light",
    "Rambutan_Traffic Sign",
    "Snorlax_Vehicle",
    "Venusaur",
    "LIME",
    "SNOMED",
    "RX-NORM",
    "Receipt Labeling",
    "My Heritage Project",
    "Dragon",
    "SKY FFV",
    "NALA 3",
    "Napa",
    "Pinfo",
    "SWDP",
  ];

  return (
    <DashboardLayout>
    <DashboardNavbar />
    <Grid item xs={12} mt={1} mb={40}>
      <Card>
        <MDBox pb={5} component="form" role="form" onSubmit={submit}>
          <MDBox
            mx={2}
            // mt={-3}
            py={3}
            pt={3}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h6" color="white">
              Reports
            </MDTypography>
          </MDBox>
          <MDBox pb={5}pt={6} px={4} display="flex" >
            <Grid container spacing={3} justifyContent="center" alignItems="center">
              <Grid item xs={2} md={3}>
                <MDTypography variant="h6" fontWeight="medium">
                   Date
                </MDTypography>
                 <MDInput
                  type="date"
                  name="tDate"
                  value={bill.tDate}
                  onChange={handleInputChange}
                   />
                  </Grid>
              {/* </Grid> */}
              <Grid item xs={2} md={3}>
                <MDTypography variant="h6" fontWeight="medium">
                  Team
                </MDTypography>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={list}
                  onChange={handleTeamChange}
                  sx={{ width: 200 }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item xs={2} md={3}>
              <MDTypography variant="h6" fontWeight="medium">
                Batch
                </MDTypography>
                <MDInput
                  type="text"
                  name="batch"
                  value={bill.batch}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
          </MDBox>
       
        <MDBox
            mx={2}
            // mt={-3}
            py={3}
            pt={3}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h6" color="white">
             Count of Associates          
            </MDTypography>
          </MDBox>
          <MDBox pb={5} pt={6} px={4} display="flex" justifycontent="space-evenly" alignItems="center">
            <Grid container spacing={1}>
              <Grid item xs={2} md={3}>
                <MDTypography variant="h6" fontWeight="medium">
                Annotation
                </MDTypography>
                <MDInput
                  type="number"
                  name="annotation"
                  value={bill.associated.annotation}
                  onChange={(e)=>setBill({...bill,associated:{annotation:e.target.value}})}
                />
              </Grid>
              <Grid item xs={2} md={3}>
                <MDTypography variant="h6" fontWeight="medium">
                QC
                </MDTypography>
                <MDInput
                   type="number"
                  name="qc"
                  value={bill.associated.qc}
                  onChange={(e)=>setBill({...bill,associated:{qc:e.target.value}})}
                />
              </Grid>
              <Grid item xs={2} md={3}>
                <MDTypography variant="h6" fontWeight="medium">
                PM + SME
                </MDTypography>
                <MDInput
                  type="number"
                  name="pmsme"
                  value={bill.associated.pmsme}
                  onChange={(e)=>setBill({...bill,associated:{pmsme:e.target.value}})}
                />
              </Grid>
              <Grid item xs={2} md={3}>
              <MDTypography variant="h6" fontWeight="medium">
                Total
                </MDTypography>
                <MDInput
                  type="number"
                  name="total"
                  value={bill.associated.total}
                  onChange={(e)=>setBill({...bill,associated:{total:e.target.value}})}
                />
              </Grid>
            </Grid>
          </MDBox>
          <MDBox
            mx={2}
            // mt={-3}
            py={3}
            pt={3}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h6" color="white">
            Total Hours Spent                   
            </MDTypography>
          </MDBox>
          <MDBox pb={5} pt={6} px={4} display="flex" justifycontent="space-evenly" alignItems="center">
            <Grid container spacing={3}>
              <Grid item xs={2} md={3}>
                <MDTypography variant="h6" fontWeight="medium">
                Annotation
                </MDTypography>
                <MDInput
                  type="number"
                  name="annotation"
                  value={bill.hours.annotation}
                  onChange={(e)=>setBill({...bill,hours:{annotation:e.target.value}})}
                />
              </Grid>
              <Grid item xs={2} md={3}>
                <MDTypography variant="h6" fontWeight="medium">
                QC
                </MDTypography>
                <MDInput
                   type="number"
                  name="qc"
                  value={bill.hours.qc}
                  onChange={(e)=>setBill({...bill,hours:{qc:e.target.value}})}
                />
              </Grid>
              <Grid item xs={2} md={3}>
                <MDTypography variant="h6" fontWeight="medium">
                PM + SME
                </MDTypography>
                <MDInput
                  type="number"
                  name="pmsme"
                  value={bill.hours.pmsme}
                  onChange={(e)=>setBill({...bill,hours:{pmsme:e.target.value}})}
                />
              </Grid>
              <Grid item xs={2} md={3}>
                <MDTypography variant="h6" fontWeight="medium">
                Project Traning
                </MDTypography>
                <MDInput
                  type="number"
                  name="projecttraning"
                  value={bill.hours.projecttraning}
                  onChange={(e)=>setBill({...bill,hours:{projecttraning:e.target.value}})}
                />
              </Grid>
              <Grid item xs={2} md={3}>
                <MDTypography variant="h6" fontWeight="medium">
                OJT
                </MDTypography>
                <MDInput
                  type="number"
                  name="ojt"
                  value={bill.hours.ojt}
                  onChange={(e)=>setBill({...bill,hours:{ojt:e.target.value}})}
                />
              </Grid>
              <Grid item xs={2} md={3}>
              <MDTypography variant="h6" fontWeight="medium">
              Quality  Annatator
                </MDTypography>
                <MDInput
                  type="number"
                  name="qualityannotator"
                  value={bill.hours.qualityannotator}
                  onChange={(e)=>setBill({...bill,hours:{qualityannotator:e.target.value}})}
                />
              </Grid>
              <Grid item xs={2} md={3}>
                <MDTypography variant="h6" fontWeight="medium">
                Idle Hours
                </MDTypography>
                <MDInput
                  type="number"
                  name="idlehours"
                  value={bill.hours.idelhours}
                  onChange={(e)=>setBill({...bill,hours:{idelhours:e.target.value}})}
                />
              </Grid>
              <Grid item xs={2} md={3}>
                <MDTypography variant="h6" fontWeight="medium">
                Other
                </MDTypography>
                <MDInput
                  type="number"
                  name="other"
                  value={bill.hours.other}
                  onChange={(e)=>setBill({...bill,hours:{other:e.target.value}})}
                />
              </Grid>
              <Grid item xs={2} md={3}>
                <MDTypography variant="h6" fontWeight="medium">
                Comments
                </MDTypography>
                <TextareaAutosize
                aria-label="minimum height"
                minRows={4}
                name="comments"
                value={bill.hours.comments}
                onChange={(e)=>setBill({...bill,hours:{comments:e.target.value}})}
                // placeholder="Minimum 3 rows"
                style={{ width: 200 }}
                />
            
              </Grid>
              <Grid item xs={2} md={3}>
                <MDTypography variant="h6" fontWeight="medium">
                Total
                </MDTypography>
                <MDInput
                  type="number"
                  name="total"
                  value={bill.hours.total}
                  onChange={(e)=>setBill({...bill,hours:{total:e.target.value}})}
                />
              </Grid>
            </Grid>
          </MDBox>
          <MDBox
            mx={2}
            // mt={-3}
            py={3}
            pt={3}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h6" color="white">
            Total Jobs Worked on                                
            </MDTypography>
          </MDBox>
          <MDBox pt={6} px={4} display="flex" justifycontent="space-evenly" alignItems="center">
            <Grid container spacing={2}>
              <Grid item xs={2} md={3}>
                <MDTypography variant="h6" fontWeight="medium">
                 Annotation Batch
                </MDTypography>
                <MDInput
                  type="number"
                  name="annotation"
                  value={bill.jobs.annotation}
                  onChange={(e)=>setBill({...bill,jobs:{annotation:e.target.value}})}
                />
              </Grid>
              <Grid item xs={2} md={3}>
                <MDTypography variant="h6" fontWeight="medium">
                QC Batch
                </MDTypography>
                <MDInput
                   type="number"
                  name="qc"
                  value={bill.jobs.qc}
                  onChange={(e)=>setBill({...bill,jobs:{qc:e.target.value}})}
                />
              </Grid>
              <Grid item xs={2} md={3}>
              <MDTypography variant="h6" fontWeight="medium">
                Total
                </MDTypography>
                <MDInput
                  type="number"
                  name="total"
                  value={bill.jobs.total}
                  onChange={(e)=>setBill({...bill,jobs:{total:e.target.value}})}
                />
              </Grid>
              <Grid item xs={1} md={2}>
                <MDBox
                  pt={4}
                  pb={3}
                  // px={2}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <MDButton variant="gradient" color="success" type="submit">
                    &nbsp;Search
                  </MDButton>
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
          </MDBox>
      </Card>
      </Grid>
    <Footer />
  </DashboardLayout>
);
}
export default Report;