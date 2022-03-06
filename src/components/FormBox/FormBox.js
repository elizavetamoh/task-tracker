import React from 'react';
import {Form, Box, Title} from "./components";
import {FormError} from "./FormError";
import {Link} from "react-router-dom";

export default function FormBox({title, children, formErrors}){

    return(
        <Form action={<Link to="/">Home</Link> }>
            <Box>
                <Title>{title}</Title>
                {children}
                <FormError formErrors={formErrors}/>
            </Box>
        </Form>

    )
}
