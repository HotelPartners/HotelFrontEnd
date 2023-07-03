import Footer from "./Footer";
import Header from "./Header";

function Employee() {
    return ( <>
    <Header />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <center>

            <div className="container">
                <h2>Order Records</h2>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Address</th>
                            <th>Contact No.</th>
                            <th>Salary</th>
                            <th>Department</th>
                            <th>Joining Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Employee Id</td>
                            <td>Employee Name</td>
                            <td>Address</td>
                            <td>Contact No.</td>
                            <td>Salary</td>
                            <td>Department</td>
                            <td>Joining Date</td>
                        </tr>
                        <tr>
                            <td>Employee Id</td>
                            <td>Employee Name</td>
                            <td>Address</td>
                            <td>Contact No.</td>
                            <td>Salary</td>
                            <td>Department</td>
                            <td>Joining Date</td>
                        </tr>
                        <tr>
                            <td>Employee Id</td>
                            <td>Employee Name</td>
                            <td>Address</td>
                            <td>Contact No.</td>
                            <td>Salary</td>
                            <td>Department</td>
                            <td>Joining Date</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </center>
        <Footer />
    </> );
}

export default Employee;