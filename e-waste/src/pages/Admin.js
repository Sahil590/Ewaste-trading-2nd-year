import React from 'react';

 
const Admin = () => {
    return (
       <div>
           <p>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="Assests/Ewaste.png" style={{width:100, height:50,}} className="img-fluid" alt />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" />
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="@{/admin}" href="#">Home</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="@{/logout}" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="jumbotron text-center">
    <h1 className="display-4">Welcome back, Admin</h1>
    <p>Easily manage your data</p>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-3 pt-3">
        <div className="card" style={{backgroundColor: 'white'}}>
          <div className="card-body">
            <h4 className="card-title">Categories</h4>
            <p className="card-text">Manage all the categories here.</p>
            <a href="#" href="/Category" className="card-link btn btn-primary">Manage</a>
          </div>
        </div>
      </div>
      <div className="col-sm-3 pt-3">
        <div className="card" style={{backgroundColor: 'white'}}>
          <div className="card-body">
            <h4 className="card-title">Products</h4>
            <p className="card-text">Manage all the products here.</p>
            <a href="#" href="/products" className="card-link btn btn-primary">Manage</a>
          </div>
        </div>
      </div>
    </div>
  </div>

           </p>
       </div>
    );
}
 
export default Admin;