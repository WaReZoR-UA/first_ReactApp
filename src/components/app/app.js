import { Component } from 'react';

import { AppFilter } from '../app-filter/app-filter';
import { AppInfo } from '../app-info/app-info';
import { EmployeesAdd } from '../employees-add-form/employees-add-form';
import { EmployeesList } from '../employees-list/employees-list';
import { SearchPanel } from '../search-panel/search-panel';

import './app.css';

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

    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onEmpDel={this.employeeDel}
                />
                <EmployeesAdd />
            </div>
        )
    }
}