import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { TextField } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useFormik } from "formik";

function Lecturer_signUp() {
  const navigate = useNavigate();
  const toSignIn = () => {
    navigate("/login");
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      title: "",
      department: "",
      gender: "",
    },
    onSubmit: (values) => {
      // This is where you insert the backend it is going to save to.
      console.log(values);
    },

    validate: (values) => {
      let errors = {};
      let regexForEmail = /^([A-Za-z0-9]{3,})[@]([a-z]{2,8})[.]([a-z]{2,5})$/;
      if (values.firstname === "") {
        errors.firstname = "This field is required";
      } else if (values.firstname.length <= 2) {
        errors.firstname = "Must be greater than two characters";
      } else if (values.firstname.length > 10) {
        errors.firstname = "Must not be more than ten characters";
      }
      if (values.lastname === "") {
        errors.lastname = "This field is required";
      } else if (values.lastname.length <= 2) {
        errors.lastname = "Must be greater than two characters";
      } else if (values.lastname.length > 10) {
        errors.lastname = "Must not be more than ten characters";
      }
      if (values.email === "") {
        errors.email = "This field is required";
      } else if (!regexForEmail.test(values.email)) {
        errors.email =
          "Email must follow the required pattern e.g ade@gmail.com";
      }
      if (values.password === "") {
        errors.password = "This field is required";
      }
      if (values.confirmPassword === "") {
        errors.confirmPassword = "This field is required";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "password doesn't match";
      }

      if (values.title === "") {
        errors.title = "Please choose your title";
      }
      if (values.department === "") {
        errors.department = "Please choose your department";
      }
      if (values.gender === "") {
        errors.gender = "Plase choose your gender";
      }

      return errors;
    },
  });

  return (
    <>
      <Container className="card p-5 w-50 shadow rounded m-auto mt-3">
        <form action="" onSubmit={formik.handleSubmit}>
          <h3 className="text-center text-primary mb-5">Register Here</h3>

          <div className="form-group w-50 " style={{ paddingRight: "10px" }}>
            <FormControl size="small" fullWidth variant="outlined">
              <InputLabel required htmlFor="outlined-age-native-simple">
                Title
              </InputLabel>
              <Select
                native
                label="Title"
                name="title"
                color={
                  formik.errors.title && formik.touched.title
                    ? "secondary"
                    : null
                }
                onChange={formik.handleChange}
                value={formik.values.title}
                onBlur={formik.handleBlur}
              >
                <option aria-label="None" value="" />
                <option value="Mr">Mr.</option>
                <option value="Mrs">Mrs.</option>
                <option value="Doctor">Doctor</option>
                <option value="Prof">Professor</option>
              </Select>
            </FormControl>
            {formik.touched.title && (
              <small className="text-danger">{formik.errors.title}</small>
            )}
          </div>

          <div className="d-flex my-3">
            <div className="form-group w-50">
              <TextField
                name="firstname"
                id="outlined-basic"
                type="text"
                variant="outlined"
                fullWidth
                label="First Name"
                required
                size="small"
                color={
                  formik.errors.firstname && formik.touched.firstname
                    ? "secondary"
                    : null
                }
                onChange={formik.handleChange}
                value={formik.values.firstname}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstname && (
                <small className="text-danger">{formik.errors.firstname}</small>
              )}
            </div>
            <div className="form-group w-50 ms-3">
              <TextField
                name="lastname"
                type="text"
                variant="outlined"
                fullWidth
                label="Last Name"
                required
                size="small"
                color={
                  formik.errors.lastname && formik.touched.lastname
                    ? "secondary"
                    : null
                }
                onChange={formik.handleChange}
                value={formik.values.lastname}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastname && (
                <small className="text-danger">{formik.errors.lastname}</small>
              )}
            </div>
          </div>

          <div className="d-flex my-3">
            <div className="form-group w-50">
              <FormControl size="small" fullWidth variant="outlined">
                <InputLabel required htmlFor="outlined-age-native-simple">
                  Select department
                </InputLabel>
                <Select
                  native
                  label="Department"
                  required
                  name="department"
                  color={
                    formik.errors.department && formik.touched.department
                      ? "secondary"
                      : null
                  }
                  onChange={formik.handleChange}
                  value={formik.values.department}
                  onBlur={formik.handleBlur}
                >
                  <option aria-label="None" value="" />
                  <option value="CSE">Computer Science</option>
                  <option value="CYB">Cyber Security</option>
                  <option value="INS">Information Science</option>
                </Select>
              </FormControl>
              {formik.touched.department && (
                <small className="text-danger">
                  {formik.errors.department}
                </small>
              )}
            </div>
            <div className="form-group w-50 ms-3">
              <FormControl size="small" fullWidth variant="outlined">
                <InputLabel required htmlFor="outlined-age-native-simple">
                  Select gender
                </InputLabel>
                <Select
                  native
                  label="Gender"
                  name="gender"
                  color={
                    formik.errors.gender && formik.touched.gender
                      ? "secondary"
                      : null
                  }
                  onChange={formik.handleChange}
                  value={formik.values.gender}
                  onBlur={formik.handleBlur}
                >
                  <option aria-label="None" value="" />
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Others</option>
                </Select>
              </FormControl>
              {formik.touched.gender && (
                <small className="text-danger">{formik.errors.gender}</small>
              )}
            </div>
          </div>
          <div className="form-group w-100 my-3">
            <TextField
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              label="Email Address"
              required
              size="small"
              color={
                formik.errors.email && formik.touched.email ? "secondary" : null
              }
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && (
              <small className="text-danger">{formik.errors.email}</small>
            )}
          </div>
          <div className="form-group  w-100 my-3">
            <TextField
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              label="Password"
              required
              size="small"
              color={
                formik.errors.password && formik.touched.password
                  ? "secondary"
                  : null
              }
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && (
              <small className="text-danger">{formik.errors.password}</small>
            )}
          </div>
          <div className="form-group  w-100 my-3">
            <TextField
              name="confirmPassword"
              type="password"
              variant="outlined"
              fullWidth
              label="Confirm Password"
              required
              size="small"
              color={
                formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? "secondary"
                  : null
              }
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && (
              <small className="text-danger">
                {formik.errors.confirmPassword}
              </small>
            )}
          </div>
          <div className="mt-4 text-end">
            <span className="me-2">
              Already have an account?{" "}
              <span className="text-primary" onClick={toSignIn}>
                Login here
              </span>
            </span>
            <Button
              disabled={!formik.isValid || !formik.dirty}
              type="submit"
              color="primary"
              variant="contained"
            >
              Register
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Lecturer_signUp;
