import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

function Home(){
    const navigate = useNavigate();
    const [messages, setMessages] = useState("");
    fetch("http://localhost:9090/Home")
        .then((res) => res.text())
        .then(m => setMessages(m))
        .catch((err) => setMessages("Unable to load home"));
    return(
        <div>

        </div>
    );
}

export default Home;