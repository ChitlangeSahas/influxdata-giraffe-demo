function StoryBookItem(props) {
    return (
        <div key={props.id} className={`Item${props.selected?' Selected':''}`} onClick={props.onClick}>
            {props.title}
        </div>
    )
}

export default StoryBookItem
