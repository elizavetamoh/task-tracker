import React, {useEffect, useState} from "react";
import FormBox from "../../components/FormBox";
import DefaultLayout from "../../components/DefaultLayout";
import VisibilityButton from "../../components/Input/buttons/VisibilityButton";
import Input from "../../components/Input";
import Button from "../../components/Input/buttons/Button";

export default function Index() {

    const [profile, setProfile] = useState({
        username: "",
        password: "",
    });

    const onNameChange = (e) => {
        setProfile({ ...profile, username: e.target.value });
    };

    const onPasswordChange = (e) => {
        setProfile({ ...profile, password: e.target.value });
    };

    useEffect(() => {
        console.log("change!!!");
    });


    const showNameAndPass = () => {
        console.log(profile)

    }

    return (
        <DefaultLayout>
            <FormBox title={"Login"}>
                <Input name={"Username"} type={"text"} id={""} onChange={onNameChange}/>
                <Input name={"Password"} type={"password"} id="passwordInput" onChange={onPasswordChange}/>
                <VisibilityButton/>
                <Button type="button" onClick={showNameAndPass}>Submit</Button>
            </FormBox>
        </DefaultLayout>

    );
}
