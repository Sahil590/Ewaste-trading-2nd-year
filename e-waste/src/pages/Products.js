import React from 'react';
 
const Products = () => {
    return (
       <div>
           <p>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <img src="Assests/Ewaste.png" style={{width:100, height:50}} className="img-fluid" alt />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" />
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" thhref="@{/admin}" href="#">Home</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" thhref="@{/logout}" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container-fluid">
  <a href="#" href="/addproduct" className="card-link btn btn-primary">Add Product</a>
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">SN</th>
          <th scope="col">Product Name</th>
          <th scope="col">Category</th>
          <th scope="col">Preview</th>
          <th scope="col">Delete</th>
          <th scope="col">Update</th>
        </tr>
      </thead>
      <tbody>
        <tr theach="product, iStat : ${products}">
          <th scope="row" thtext="${iStat.index + 1}">1</th>
          <td thtext="${product.name}">Dell G5 3590</td>
          <td thtext="${product.category.name}">Laptop</td>
          <td><img src="Assests/dell-g5.jpg" style={{width:150, height:100,}} className="img-fluid" alt /></td>
          <td><a href thhref="@{/admin/product/delete/{id}(id=${product.id})}" className="btn btn-danger">Delete</a></td>
          <td><a href thhref="@{/admin/product/update/{id}(id=${product.id})}" className="btn btn-warning">Update</a></td>
        </tr>
      </tbody>
    </table>
  </div>
           </p>
       </div>
       );
    }
     
    export default Products;
           