import React, {useState} from "react";
import FormBox from "../../components/FormBox";
import DefaultLayout from "../../components/DefaultLayout";
import VisibilityButton from "../../components/Input/buttons/VisibilityButton";
import Input from "../../components/Input";
import Button from "../../components/Input/buttons/Button";
import {Validate} from "../../validators/formValidator";

export default function Index() {

    const [state, setState] = useState({
        email: '',
        firstName: '',
        lastName: '',
        avatar: '',
        password: '',
        formErrors: {email: '', firstName: '', lastName: '', avatar: '', password: ''},
    });

    const handleUserInput = (e) => {
        console.log(state);
        const name = e.target.name;
        const value = e.target.value;
        setState({...state, [name]: value});
        Validate(name,value, state);
    }

    const isDisabled = () => {
        return state.formErrors.email !== ''
            || state.formErrors.firstName !== ''
            || state.formErrors.lastName !== ''
            || state.formErrors.password !== '';
    }


    return (
        <DefaultLayout>
            <FormBox title={"Registration"} formErrors={state.formErrors}>
                <Input
                    label={"Email"}
                    name={"email"}
                    type={"email"}
                    value={state.email}
                    onChange={handleUserInput}
                    required
                />
                <Input
                    label={"First name"}
                    name={"firstName"}
                    type={"text"}
                    value={state.firstName}
                    onChange={handleUserInput}
                    required
                />
                <Input
                    label={"Last Name"}
                    name={"lastName"}
                    type={"text"}
                    value={state.lastName}
                    onChange={handleUserInput}
                    required
                />
                <Input
                    label={"Avatar"}
                    name={"avatar"}
                    type={"file"}
                    accept={"image/*"}
                    value={state.avatar}
                    onChange={handleUserInput}
                />
                <Input
                    label={"Password"}
                    name={"password"}
                    type={"password"}
                    value={state.password}
                    id="passwordInput"
                    onChange={handleUserInput}
                    required
                />
                <VisibilityButton/>
                <Button type="submit" disabled={isDisabled()}>Submit</Button>
            </FormBox>
        </DefaultLayout>
    );
}
