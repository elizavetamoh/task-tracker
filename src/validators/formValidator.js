export function Validate(fieldName, value, state) {
    let fieldValidationErrors = state.formErrors;
    let valid;
    switch (fieldName) {
        case 'email':
            valid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && value.length > 0;
            fieldValidationErrors.email = valid ? '' : 'Please enter your email in this format: example@example.com';
            break;
        case 'firstName':
            valid = value.length >= 3;
            fieldValidationErrors.firstName = valid ? '' : 'Minimum length 3 characters';
            break;
        case 'lastName':
            valid = value.length >= 3;
            fieldValidationErrors.lastName = valid ? '' : 'Minimum length 3 characters';
            break;
        case 'avatar':
            valid = value.match(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i);
            fieldValidationErrors.password = valid ? '' : 'Please add image';
            break;
        case 'password':
            valid = value.match(/^(?=.*[0-9])(?=.*[a-z]).{1,20}$/i) && value.length > 0;
            fieldValidationErrors.password = valid ? '' : 'Password must contain letters and numbers ';
            break;
        default:
            break;
    }
}
