import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './templates/header';
import Login from './pages/login';
import ResetPassword from './pages/reset-password';
import PasswordResetSuccess from './pages/password-reset-success';
import UserDashboard from './pages/user-dashboard-empty';
import UpdateSchoolInfo from './pages/update-school-info';
import AdminSetup from './pages/admin-setup';
import AddCourses from './pages/add-courses';
import AddSchool from './pages/add-school';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route path='/login' component={Login} />
					<Route path='/reset-password' component={ResetPassword} />
					<Route path='/reset-password-success' component={PasswordResetSuccess} />
					<Route path='/user-dashboard' component={UserDashboard} />
					<Route path='/update-school-info' component={UpdateSchoolInfo} />
					<Route path='/admin-setup' component={AdminSetup} />
					<Route path='/add-courses' component={AddCourses} />
					<Route path='/add-school' component={AddSchool} />
				</div>
			</Router>
		);
	}
}

export default App;
