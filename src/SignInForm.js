import React, {useEffect} from "react"; 
import { useFormik } from "formik"; 
import { 
 Box, 
 Button, 
 FormControl, 
 FormErrorMessage, 
 FormLabel, 
 Heading, 
 Input, 
 Select, 
 Textarea, 
 VStack, 
} from "@chakra-ui/react"; 
import * as Yup from 'yup'; 
import './SignInForm.css';
import { color } from "framer-motion";
import {useNavigate} from 'react-router-dom';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


function SignInForm() {
    const nevigate = useNavigate();
    const formik = useFormik({ 
        initialValues: { 
          name: "", 
          email: "", 
          phone: "", 
          specialRequest: "", 
        }, 
        onSubmit: (values) => { 
            alert(JSON.stringify(values));
            
        }, 
        validationSchema: Yup.object({ 
          name: Yup.string().required("Required"), 
          email: Yup.string().email("Invalid email address").required("Required"), 
          phone: Yup.string()
          .required("required")
          .matches(phoneRegExp, 'Phone number is not valid')
          .min(10, "too short")
          .max(10, "too long"),
        }), 
      }); 
  return (
    <div className="signInBackground">
        <div className="customerDetail"> 
            <Heading as="h1" id=""> 
                Customer Detail 
            </Heading> 
        </div>
       <div className='signInFormContainer'>
        <form className="signInForm" onSubmit={formik.handleSubmit}> 
            <div>
            <FormControl isInvalid={!!formik.errors.name && formik.touched.name}> 
                <FormLabel htmlFor="name">Name</FormLabel> 
                <Input 
                    id="name" 
                    name="name" 
                    width={300}
                    {...formik.getFieldProps("name")} 
                /> 
                <FormErrorMessage className="errorMessage">{formik.errors.name}</FormErrorMessage> 
                </FormControl> 
            </div>
            <div>
            <FormControl isInvalid={!!formik.errors.email && formik.touched.email}> 
                <FormLabel htmlFor="email">Email Address</FormLabel> 
                <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    width={300}
                    {...formik.getFieldProps("email")} 
                /> 
                <FormErrorMessage className="errorMessage">{formik.errors.email}</FormErrorMessage> 
                </FormControl> 
            </div>
            <div>
            <FormControl isInvalid={!!formik.errors.phone && formik.touched.phone}> 
                <FormLabel htmlFor="phone">Phone</FormLabel> 
                <Input id="phone" name="phone" width={300} {...formik.getFieldProps("phone")} /> 
                <FormErrorMessage className="errorMessage">{formik.errors.phone}</FormErrorMessage>
                </FormControl> 
            </div>
            <div>
                <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}> 
                <FormLabel htmlFor="specialRequest">Special Request</FormLabel> 
                <Textarea 
                    id="specialRequest" 
                    name="specialRequest" 
                    height={200}
                    width={300} 
                    placeholder="Optional"
                    {...formik.getFieldProps("specialRequest")} 
                /> 
                <FormErrorMessage className="errorMessage">{formik.errors.comment}</FormErrorMessage> 
                </FormControl> 
            </div>
            <div className="btnContainer">
            <Button type="submit" className="btn" > 
                Submit 
                </Button> 
            </div>
        </form> 
       </div> 
     </div> 
  );
}

export default SignInForm;