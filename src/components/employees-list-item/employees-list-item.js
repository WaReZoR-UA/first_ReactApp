import './employees-list-item.css'

export const EmployeesListItem = (props) => {
    const {
        name,
        salary,
        onEmpDel,
        increase,
        like,
        onToggleIncrease,
        onToggleLike,
    } = props

    const increaseClass = increase ? ' increase' : ''
    const likeClass = like ? ' like' : ''

    return (
        <li
            className={
                'list-group-item d-flex justify-content-between' +
                increaseClass +
                likeClass
            }>
            <span
                onClick={onToggleLike}
                className="list-group-item-label">
                {name}
            </span>
            <input
                type="text"
                className="list-group-item-input"
                defaultValue={salary + '$'}
            />
            <div className="d-flex justify-content-center align-items-center">
                <button
                    onClick={onToggleIncrease}
                    className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>
                <button
                    className="btn-trash btn-sm"
                    onClick={onEmpDel}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}
