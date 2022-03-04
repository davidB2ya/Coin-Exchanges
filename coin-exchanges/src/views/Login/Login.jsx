import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../sass/app.scss';

const Login = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();

    const baseUrl = 'http://localhost:3005'

    async function registerUser(event) {
        event.preventDefault();
        const response = await fetch(`${baseUrl}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
                location,
            }),
        });

        const data = await response.json();
        console.log(data);
        
        if(data.msg === 'Login success!'){
            if(data.role === 2){
                navigate("/dashboard")
            }else{
                navigate("/home")
            }
        }else{
            alert("Ingreso fallido")
        }
    }

return (
    <div>
        <div>
        {/* <img src={ImgPizza} alt="img pizza" ></img> */}
            <h1>Entrar</h1>
            <form onSubmit={registerUser}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Nombre"
                    autoComplete='off'
                />
                <br />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Correo"
                    autoComplete='false'
                />
                <br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Contraseña"
                    autoComplete='false'
                />
                <br />
                <button onClick={registerUser}>Ingresar</button>
            </form>
        </div>    
    </div>
)
}

export default Login