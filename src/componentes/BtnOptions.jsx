function BtnOptions(props) {
    return (
        <div className='btnsOp'>
            <button className="btnform" onClick={() => props.clickBtnOptions("Adicionar")}>Criar nota</button>
            {props.parafazer && <button className="btnform" onClick={() => props.clickBtnOptions("Todos")}>Todos</button>|| props.feitos && <button className="btnform" onClick={() => props.clickBtnOptions("Todos")}>Todos</button>}
            <button className="btnform" onClick={() => props.clickBtnOptions("Parafazer")}>Para fazer</button>
            <button className="btnform" onClick={() => props.clickBtnOptions("Feitos")}>Feitos</button>
        </div>
    )
}

export default BtnOptions