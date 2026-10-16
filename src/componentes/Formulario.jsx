import { useState } from 'react';
import comeBack from '../assets/comeback.png';

function Formulario(props) {

    const [texto, setTexto] = useState("");

    function formEscrito(event) {
        const t = event.target.value
        setTexto(t);
    }

    return (
        <div className='backAndForm'>
            <button id='comeBack' onClick={()=> props.comeBack("Comeback")} ><img src={comeBack} alt='comeback'/></button>
            <form>
                <input type="text" name="item" onChange={formEscrito} value={texto} />
                <button type='submit' onClick={(evet)=>{
                    event.preventDefault();
                    if(!texto) return;
                    props.addTextInList(texto)
                    setTexto("")
                    }}>Adicionar</button>
            </form>
        </div>
    )
}

export default Formulario