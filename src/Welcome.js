import React from 'react';

class Welcome extends React.Component
{
	render(){
	return (<div><h1> Welcome to class component</h1>
		<p>to react</p>
		<User />
		</div>);
}
}

function User(){
	return <h1>User function Component in welcome class component</h1>;
}

export default Welcome;