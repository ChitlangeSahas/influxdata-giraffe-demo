import StoryBookItem from './Item'

function StoryBook(props) {
    const getIndex = () => {
        return props.index.map((i) => {
            return (
                <StoryBookItem key={i.id} {...i} onClick={i.onClick} />
            )
        })
    }
    return (
        <div className='StoryBook'>
            {/*<div className='Title'>Layer Examples</div>*/}
            <div className='Items'>
                {getIndex()}
            </div>
        </div>
    )
}

export default StoryBook
