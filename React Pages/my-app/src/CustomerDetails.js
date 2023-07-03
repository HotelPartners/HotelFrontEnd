import Footer from "./Footer";
import Header from "./Header";

function CustomerDetails() {
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
                        <tr>
                            <th>Customer Id</th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Contact No.</th>
                        </tr>
                        <tr>
                            <td>Customer Id</td>
                            <td>Customer Name</td>
                            <td>Email</td>
                            <td>Contact No.</td>
                        </tr>
                        <tr>
                            <td>Customer Id</td>
                            <td>Customer Name</td>
                            <td>Email</td>
                            <td>Contact No.</td>
                        </tr>
                        <tr>
                            <td>Customer Id</td>
                            <td>Customer Name</td>
                            <td>Email</td>
                            <td>Contact No.</td>
                        </tr>
                    </table>
                </div>
            </div>
        </center>
        <Footer />
    </> );
}

export default CustomerDetails;