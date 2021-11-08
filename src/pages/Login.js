import React,{useEffect,useState} from 'react';
import { useNavigate} from 'react-router-dom';
import Error from './Error';
const Login = () => {
    const [alerta, setAlerta] = useState(false);
    useEffect(()=>{
        setAlerta(false)
    },[])
    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // extraer de usuario
    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }
    const navigate = useNavigate();

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();
        setAlerta(false)
        // Validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === '') {
           setAlerta(true);
        }else{
            //Verificar que autentico bien
            debugger
            navigate('/products')
         }
    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit={onSubmit}
                >
                                { alerta ? 
            <Error mensaje={'Todos las campos son obligatorios'}/>
            : null 
        }

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">                   
                        <input type="submit" className="btn-submit" value="Iniciar Sesión" />
                    </div>
                </form>
            </div>
        </div>
     );
}

export default Login