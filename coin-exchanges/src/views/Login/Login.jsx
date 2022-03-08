import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../sass/app.scss';
import ImgCriptos from '../../assets/images (1).jfif'

const Login = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();

    async function loginUser(event) {
        event.preventDefault();
        const response = await fetch(`/api/login`, {
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

        if (data.msg === 'Login success!') {
            navigate("/dashboard")
        } else {
            alert("Ingreso fallido")
        }
    }
    async function registerUser() {
        navigate("/register")
    }

    return (
        <div className='Login'>
            <div className='Card_Login'>
                <img src={ImgCriptos} alt="img criptos" ></img>
                <h1>Entrar</h1>
                <form onSubmit={loginUser}>
                    <input
                        className="inputLogin"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Nombre"
                        autoComplete='off'
                    />
                    <br />
                    <input
                        className="inputLogin"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Correo"
                        autoComplete='false'
                    />
                    <br />
                    <input
                        className="inputLogin"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Contraseña"
                        autoComplete='false'
                    />
                    <br />
                    <button className="btn" onClick={loginUser}>Ingresar</button>
                    <button className="btn" onClick={registerUser}>Registrarse</button>

                </form>
            </div>
        </div>
    )
}

export default Login