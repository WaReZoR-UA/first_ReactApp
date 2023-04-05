import { Component } from 'react'

import './employees-add-form.css'

export class EmployeesAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: '',
        }
    }

	onValueChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	render() {
		const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    action=""
                    className="d-flex add-form">
                    <input
                        type="text"
						name="name"
						value={name}
                        className="form-control new-post-label"
                        placeholder="What's his name?"
                        onChange={this.onValueChange}
                    />
                    <input
                        type="number"
						name="salary"
						value={salary}
                        className="form-control new-post-label"
                        placeholder="Salary in $"
                        onChange={this.onValueChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-outline-light">
                        Add
                    </button>
                </form>
            </div>
        )
    }
}
