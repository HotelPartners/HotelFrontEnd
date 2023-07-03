import Footer from "./Footer";
import Header from "./Header";

function Supplier() {
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
                            <th>Supplier Id</th>
                            <th>Supplier Name</th>
                            <th>Address</th>
                            <th>Contact No.</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Supplier Id</td>
                            <td>Supplier Name</td>
                            <td>Address</td>
                            <td>Contact No.</td>
                        </tr>
                        <tr>
                            <td>Supplier Id</td>
                            <td>Supplier Name</td>
                            <td>Address</td>
                            <td>Contact No.</td>
                        </tr>
                        <tr>
                            <td>Supplier Id</td>
                            <td>Supplier Name</td>
                            <td>Address</td>
                            <td>Contact No.</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </center>
        <Footer />
    </> );
}

export default Supplier;