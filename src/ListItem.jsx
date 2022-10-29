const ListItem = (props) => {
    
    return (
        <a href={props.link} id={props.id} className="list-item">
            {props.name}
        </a>
    )
}

export default ListItem