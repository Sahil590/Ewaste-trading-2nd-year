
import React from 'react';
 
const Category = () => {
    return (
       <div>
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
  <div className="container">
    
  <a href="#" href="/addcategory" className="card-link btn btn-primary">Add Category</a>


    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">SN</th>
          <th scope="col">Category Name</th>
          <th scope="col">Delete</th>
          <th scope="col">Update</th>
        </tr>
      </thead>
      <tbody>
        <tr theach="category, iStat : ${categories}">
          <th scope="row" thtext="${iStat.index + 1}">1</th>
          <td thtext="${category.name}">Laptop</td>
          <td><a href thhref="@{/admin/categories/delete/{id}(id=${category.id})}" className="btn btn-danger">Delete</a></td>
          <td><a href thhref="@{/admin/categories/update/{id}(id=${category.id})}" className="btn btn-warning">Update</a></td>
        </tr>
      </tbody>
    </table>
  </div>
       </div>
    );
}
 
export default Category;