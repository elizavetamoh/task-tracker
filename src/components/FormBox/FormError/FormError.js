import React from 'react';
import {Ul, Li} from './components'

export const FormError = ({formErrors}) =>
    <Ul>
        {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length > 0){
                return (
                    <Li key={i}>{formErrors[fieldName]}</Li>
                )
            } else {
                return '';
            }
        })}
    </Ul>
