import { Component } from 'react';
import './employees-list-item.css';

export class EmployeesListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
			increase: false,
			like: false,
        }
    }

	incEmployee = () => {
		this.setState(({ increase }) => ({
			increase: !increase,
		}))
	}

	likeEmployee = () => {
		this.setState(({ like }) => ({
			like: !like,
		}))
	}


    render() {
		const { name, salary, onEmpDel } = this.props
		const { increase, like } = this.state;

		const increaseClass = increase ? ' increase' : '';
		const likeClass = like ? ' like' : '';

        return (
            <li
                className={
                    'list-group-item d-flex justify-content-between' +
                    increaseClass +
                    likeClass
                }>
                <span
                    onClick={this.likeEmployee}
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
                        onClick={this.incEmployee}
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
}