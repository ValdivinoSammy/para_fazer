import { useEffect, useState } from 'react';
import Formulario from './componentes/Formulario';
import Lista from './componentes/Lista';
import ObjItem from './item';
import './App.css'

const SAVED_ITENS = "itens_Salvo";

function App() {
    const [itens, setItens] = useState([])
    const [carregado, setCarregado] = useState(false)

    useEffect(()=>{
       let itensSalvos = localStorage.getItem(SAVED_ITENS);
       if(itensSalvos){
            let dados = JSON.parse(itensSalvos);
            ObjItem.atualizarID(dados)
            setItens(dados)
       }
       setCarregado(true)
    },[])
    
    useEffect(()=>{
        if(carregado){
            localStorage.setItem(SAVED_ITENS, JSON.stringify(itens));
        }
    },[itens , carregado])

    function addTextInList(texto) {
        let item = new ObjItem(texto)
        setItens([...itens, item])
    }

    function deleteInList(item) {
        let newItens = itens.filter(it => it.id !== item.id)
        setItens(newItens)
    }

    function checkedDone(item) {
        let newItens = itens.map(it=> it.id === item.id? {...it, feito:!it.feito}: it)
        setItens(newItens)
    }

    return (
        <> 
            <header><h1>PARA FAZER</h1></header>
            <div id='container'>
            <Formulario addTextInList={addTextInList} />
            <Lista itens={itens} deleteInList={deleteInList} checkedDone={checkedDone} />
            </div>
        </>
    )
}


export default App