import React from "react";
import FormBox from "../../components/FormBox";
import DefaultLayout from "../../components/DefaultLayout";
import VisibilityButton from "../../components/Input/buttons/VisibilityButton";
import Input from "../../components/Input";
import Button from "../../components/Input/buttons/Button";

export default function Index() {
    return (
        <DefaultLayout>
            <FormBox title={"Registration"}>
                <Input name={"Email"} type={"text"} />
                <Input name={"First name"} type={"text"}/>
                <Input name={"Last Name"} type={"text"}/>
                <Input name={"Avatar"} type={"file"} title={" "}/>
                <Input name={"Password"} type={"password"} id="passwordInput"/>
                <VisibilityButton/>
                <Button type="button">Submit</Button>
            </FormBox>
        </DefaultLayout>

    );
}
