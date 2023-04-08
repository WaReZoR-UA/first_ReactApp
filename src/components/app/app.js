import { Component } from 'react'

import { AppFilter } from '../app-filter/app-filter'
import { AppInfo } from '../app-info/app-info'
import { EmployeesAdd } from '../employees-add-form/employees-add-form'
import { EmployeesList } from '../employees-list/employees-list'
import { SearchPanel } from '../search-panel/search-panel'

import './app.css'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name: 'Lisa M.',
                    salary: 800,
                    like: false,
                    increase: true,
                    id: 1,
                },
                {
                    name: 'John F.',
                    salary: 3000,
                    like: false,
                    increase: false,
                    id: 2,
                },
                {
                    name: 'Nensy W.',
                    salary: 5000,
                    like: false,
                    increase: false,
                    id: 3,
                },
            ],
        }
    }

    employeeDel = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((employee) => employee.id !== id),
            }
        })
    }

	employeeAdd = (name, salary) => {
		if (name.trim() !== '' && salary.trim() !== '') {
			const newEmployee = {
				name: name,
				salary: salary,
				like: false,
				increase: false,
				id: this.idGen(),
			}
			this.setState(({ data }) => {
				const newData = [...data, newEmployee]
				return {
					data: newData,
				}
			})
        }
    }

    idGen = () => {
        const timestamp = Date.now(),
            rndNum = Math.floor(Math.random() * 100000000)
        return +(timestamp + '' + rndNum)
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((employee) =>
                employee.id === id
                    ? { ...employee, [prop] : !employee[prop] }
                    : employee
            ),
        }))
    }

    employeesTotal = () => {
        return this.state.data.length
    }

    incTotal = () => {
        const data = this.state.data
        return  (data.filter((item) => item.increase)).length
    }

    render() {
        return (
            <div className="app">
                <AppInfo
                    employeesTotla={this.employeesTotal()}
                    incTotal={this.incTotal()}
                />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onEmpDel={this.employeeDel}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAdd employeeAdd={this.employeeAdd} />
            </div>
        )
    }
}
