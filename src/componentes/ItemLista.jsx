
import Card from './Card';
import iconLixo from '../assets/delete.png';
import iconCheck from '../assets/check.png';
import iconAnCheck from '../assets/anCheck.webp';


function FeitoImg(props) {
    if (props.feito) {
        return <img alt="check" src={iconCheck} />
    } else {
        return <img alt="anCheck" src={iconAnCheck} />
    }
}


function ItemLista(props) {
    return (
        <li >
            <Card className={props.item.feito ? "list-card check" : "list-card"}>
                {props.item.text}
                <div className="flex">
                    <button onClick={() => { props.checkedDone(props.item) }}><FeitoImg feito={props.item.feito} /></button>
                    <button onClick={() => { props.deleteInList(props.item) }}><img alt='delete' src={iconLixo} /></button>
                </div>
            </Card>
        </li>
    )
}

export default ItemLista