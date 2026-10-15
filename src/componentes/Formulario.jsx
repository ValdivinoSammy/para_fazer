import { useState } from 'react';

function Formulario(props) {

    const [texto, setTexto] = useState("");

    function formEscrito(event) {
        const t = event.target.value
        setTexto(t);
    }

    return (
        <>
            <form>
                <input type="text" name="item" onChange={formEscrito} value={texto} />
                <button type='submit' onClick={(evet)=>{
                    event.preventDefault();
                    props.addTextInList(texto)
                    setTexto("")
                    }}>Adicionar</button>
            </form>
        </>
    )
}

export default Formulario