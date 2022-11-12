function Employee(props){
    return (
        <div className="employees">
            <img class="employee-img" src={props.img} alt="Employee Image" />
            <h1 class="employee-label">Employee name: {props.name}</h1>
            {props.role ? <p class="employee-role">{props.role}</p> : <p class="employee-no-role">No role</p>}
        </div>
    );
}

export default Employee;