import TipoDeLista from './TipoDeLista';


function Lista(props) {
    return (
        <TipoDeLista itens={props.itens} parafazer={props.parafazer} feitos={props.feitos} deleteInList={props.deleteInList} checkedDone={props.checkedDone} />
    )
}

export default Lista