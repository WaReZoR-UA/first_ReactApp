import './employees-add-form.css'

export const EmployeesAdd = () => {
    return (
        <div className="app-add-form">
            <h3>Add new employee</h3>
            <form
                action=""
                className="d-flex add-form">
                <input
                    type="text"
                    className="form-control new-post-label"
                    placeholder="What's his name?"
                />
                <input
                    type="text"
					className="form-control new-post-label"
					placeholder="Salary in $"
				/>
				<button type="submit" className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
}
