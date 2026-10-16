import ItemLista from './ItemLista';

function TipoDeLista(props) {
    if (props.parafazer) {
        let res = props.itens.some(item => item.feito === false)
        if (!res) { return (<ul><h2>Nenhum registro de afazeres pendente.</h2></ul>) }
        return (
            <ul>
                {props.itens.map(item => { if (!item.feito) { return <ItemLista key={item.id} item={item} deleteInList={props.deleteInList} checkedDone={props.checkedDone} /> } })}
            </ul>
        )
    } else if (props.feitos) {
        let res = props.itens.some(item => item.feito === true)
        if (!res) { return (<ul><h2>Nenhum registro de afazeres concluídos.</h2></ul>) }
        return (
            <ul>
                {props.itens.map(item => { if (item.feito) { return <ItemLista key={item.id} item={item} deleteInList={props.deleteInList} checkedDone={props.checkedDone} /> } })}
            </ul>
        )
    } else if (props.itens.length === 0) { return (<ul><h2>Sua lista de afazeres está vazia.</h2></ul>) }
    return (
        <ul>
            {props.itens.map(item => <ItemLista key={item.id} item={item} deleteInList={props.deleteInList} checkedDone={props.checkedDone} />)}
        </ul>
    )
}

export default TipoDeLista