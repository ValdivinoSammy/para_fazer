function BtnOptions(props) {
    return (
        <div className='btnsOp'>
            <button onClick={() => props.clickBtnOptions("Adicionar")}>Adicionar</button>
            {props.parafazer && <button onClick={() => props.clickBtnOptions("Todos")}>Todos</button>|| props.feitos && <button onClick={() => props.clickBtnOptions("Todos")}>Todos</button>}
            <button onClick={() => props.clickBtnOptions("Parafazer")}>Para fazer</button>
            <button onClick={() => props.clickBtnOptions("Feitos")}>Feitos</button>
        </div>
    )
}

export default BtnOptions