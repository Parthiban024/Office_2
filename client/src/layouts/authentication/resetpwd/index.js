import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useState} from "react";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import axios from 'axios';
import { useParams } from "react-router-dom";
import {ToastContainer,toast} from 'react-toastify'
// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";

function Reset() {
  const initialValues = {
    email: "",
    password: "",
    cpassword: "",
  };
  const [values, setValues] = useState(initialValues);
  const {token} = useParams()
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: values.email,
      password: values.password,
      password2: values.cpassword,
      token: token
    };

    axios.post('/authentication/user/reset',userData)
    .then(()=>toast.success('Password Updated Successfully 🎉'))
    .then((res)=>toast.success(res.data))
    .catch(err=>toast.error(err.response.data))
    console.log(userData);
  };
  return (
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </MDTypography>
          {/* <MDTypography display="block" variant="button" color="white" my={1}>
            You will receive an e-mail in maximum 60 seconds
          </MDTypography> */}
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
          <MDBox mb={2}>
                <MDInput
                  type="email"
                  value={values.email}
                  onChange={handleInputChange}
                  name="email"
                  // helperText={err.email || err.emailAlready}
                  label="Email"
                  fullWidth
                />
              </MDBox>
            <MDBox mb={2}>
                <MDInput
                  type="password"
                  value={values.password}
                  onChange={handleInputChange}
                  name="password"
                  // helperText={err.password}
                  label="Password"
                  fullWidth
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="password"
                  label="Confirm Password"
                  value={values.cpassword}
                  onChange={handleInputChange}
                  name="cpassword"
                  // helperText={err.password2}
                  fullWidth
                />
              </MDBox>
            <MDBox mt={3} mb={1}>
              <MDButton variant="gradient" type="submit" color="info" fullWidth>
                update
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      <ToastContainer/>
    </CoverLayout>
  );
}

export default Reset;
