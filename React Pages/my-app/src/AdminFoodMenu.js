import Footer from "./Footer";
import Header from "./Header";

function AdminFoodMenu() {
    return ( <>
    <Header/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div class="container">
        <center>
        <h2>Menu</h2>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary m-2">Add Item</button>
            <button className="btn btn-primary m-2">Remove Item</button>
        </div>
        <div class="table-repsonsive">
            <table class="table table-bordered">
                <tbody>
                    <tr >
                        <td rowSpan={8} style={{"width" : "10%"}}>
                        <button class="btn btn-light m-2">Category</button>
                        <button class="btn btn-light m-2">Category</button>
                        <button class="btn btn-light m-2">Category</button>
                        <button class="btn btn-light m-2">Category</button>
                        <button class="btn btn-light m-2">Category</button>
                        <button class="btn btn-light m-2">Category</button>
                        <button class="btn btn-light m-2">Category</button>
                        <button class="btn btn-light m-2">Category</button>
                        </td>
                        <td>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                            <button className="btn btn-info m-3">Food Item</button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>   
        </center> 
    </div>
    <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <Footer/>
    </> );
}

export default AdminFoodMenu;