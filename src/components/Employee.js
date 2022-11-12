function Employee(props){
    return (
        <div className="employees">
            <h1>Employee name: {props.name}</h1>
            {props.role ? <p class="role">{props.role}</p> : <p class="no-role">No role</p>}
        </div>
    );
}

export default Employee;