import "./index.css"

function Botao(props){
    return (
        <div>
            <button className={props.class}>{props.name}</button>
        </div>
    )
}

export default Botao;