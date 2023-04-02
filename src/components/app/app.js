import { AppFilter } from '../app-filter/app-filter';
import { AppInfo } from '../app-info/app-info';
import { EmployeesAdd } from '../employees-add-form/employees-add-form';
import { EmployeesList } from '../employees-list/employees-list';
import { SearchPanel } from '../search-panel/search-panel';

import './app.css';

export const App = () => {

	const data = [
		{name: 'Lisa M.', salary: 800, like: false, increase: true, id: 1},
		{name: 'John F.', salary: 3000, like: false, increase: false, id: 2},
		{name: 'Nensy W.', salary: 5000, like: false, increase: false, id: 3},
	]

	return (
		<div className='app'>
			<AppInfo />

			<div className="search-panel">
				<SearchPanel />
				<AppFilter/>
			</div>

			<EmployeesList data={data} />
			<EmployeesAdd/>
		</div>
	)
}