import './app-filter.css';

export const AppFilter = () => {
	return (
        <div className="btn-group">
            <button
                type={'button'}
                className={'btn btn-light'}>
                All employees
            </button>
            <button
                type={'button'}
                className={'btn btn-outline-light'}>
                To increase
            </button>
            <button
                type={'button'}
                className={'btn btn-outline-light'}>
                Salary more than $1000
            </button>
        </div>
    )
}