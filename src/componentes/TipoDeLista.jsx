import ItemLista from './ItemLista';

function TipoDeLista(props) {
    if (props.parafazer) {
        return (
            <ul>
                {props.itens.map(item => { if (!item.feito) { return <ItemLista key={item.id} item={item} deleteInList={props.deleteInList} checkedDone={props.checkedDone} /> } })}
            </ul>
        )
    } else if (props.feitos) {
        return (
            <ul>
                {props.itens.map(item => { if (item.feito) { return <ItemLista key={item.id} item={item} deleteInList={props.deleteInList} checkedDone={props.checkedDone} /> } })}
            </ul>
        )
    }
    return (
        <ul>
            {props.itens.map(item => <ItemLista key={item.id} item={item} deleteInList={props.deleteInList} checkedDone={props.checkedDone} />)}
        </ul>
    )
}

export default TipoDeLista