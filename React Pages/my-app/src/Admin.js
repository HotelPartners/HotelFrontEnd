import Footer from "./Footer";
import Header from "./Header";
import './Admin.css'

function Admin() {
    return (  

        <>
        <div>
        <Header />
        </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div style={{ display: "flex",marginLeft:"70px",marginRight:"70px" }}>
  <div className="mid" >
    <h2 style={{textAlign:"center"}}>Menu</h2>
  </div>
  <div className="mid" >
  <h2 style={{textAlign:"center"}}>Tables</h2>
  </div>
  <div className="mid" >
  <h2 style={{textAlign:"center"}}>Access manager</h2>
  </div>
  <div className="mid" >
  <h2 style={{textAlign:"center"}}>Inventory</h2>
  </div>
  <div className="mid" >
  <h2 style={{textAlign:"center"}}>Bills</h2>
  </div>
  <div className="mid" >
  <h2 style={{textAlign:"center"}}>Suppliers</h2>
  </div>
  <div className="mid" >
  <h2 style={{textAlign:"center"}}>Customers</h2>
  </div>
  <div className="mid" >
  <h2 style={{textAlign:"center"}}>Employee Data</h2>
  </div>
</div>

        <Footer />
        </>
    );
}

export default Admin;