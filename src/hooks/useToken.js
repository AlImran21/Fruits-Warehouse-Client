import { async } from "@firebase/util";
import axios from "axios";
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useToken = () => {
    const [user] = useAuthState(auth);
    const [token, setToken] = useState('');

    useEffect(() => {

        const getToken = async () => {
            console.log(user);
            const email = user?.email;
            if (email) {
                const { data } = await axios.post('https://frozen-island-93381.herokuapp.com/login', { email });
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        }

        getToken();

    }, [user]);

    return [token];
}

export default useToken;