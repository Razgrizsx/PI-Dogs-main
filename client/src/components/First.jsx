import React from "react";
import { useHistory } from 'react-router-dom';
import './first.css';

const First = () => {

    const history = useHistory();

    const handleclick = () => {
        history.push("/Main");
    }

    return(<div>
        <h1 className="position">Bienvenido</h1>
        <button type="button" onClick={handleclick} className='button'>Ingresar</button>
        </div>
    )
}

export default First