import { EmployeesListItem } from '../employees-list-item/employees-list-item'

import './employees-list.css'

export const EmployeesList = ({ data }) => {
    const element = data.map((item) => {
        const { id, ...itemProps } = item

        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
            />
        )
    })

    return <ul className="app-list list-group">{element}</ul>
}