import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useState} from "react";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";

function Reset() {
  const initialValues = {
    email: "",
    password: "",
    cpassword: "",
  };
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const useremail = {
      email: values.email,
      password: values.password,
      cpassword: values.cpassword,
    };
    console.log(useremail);
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
    </CoverLayout>
  );
}

export default Reset;
