import { useState } from 'react';
import ItemLista from './ItemLista';


function Lista(props) {
    return (
        <ul>
            {props.itens.map(item => <ItemLista key={item.id} item={item} deleteInList={props.deleteInList} checkedDone={props.checkedDone} />)}
        </ul>
    )
}

export default Lista