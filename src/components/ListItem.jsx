const ListItem = (props) => {
    
    return (
        <a href={props.link} id={props.id} target="_blank" rel="noreferrer" className="list-item">
            {props.name}
        </a>
    )
}

export default ListItem