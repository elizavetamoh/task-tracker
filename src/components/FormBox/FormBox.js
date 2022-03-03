import React from 'react';
import {Form, Box, Title} from "./components";

export default function FormBox({title, children}){

    return(
        <Form>
            <Box>
                <Title>{title}</Title>
                {children}
            </Box>
        </Form>

    )
}
