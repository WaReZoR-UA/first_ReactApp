import './app-info.css';

export const AppInfo = (props) => {
	const { employeesTotla, incTotal } = props

	return (
        <div className="app-info">
            <h1>Accounting for employees in MCA</h1>
            <h2>Total number of employees: {employeesTotla}</h2>
            <h2>The prize will receive: {incTotal}</h2>
        </div>
    )
}