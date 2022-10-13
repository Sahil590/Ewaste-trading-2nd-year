import React from 'react';
 
const addcategory = () => {
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
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <form thaction="@{/admin/categories/add}" method="post" thobject="${category}">
          <input type="hidden" name="id" thfield="*{id}" />
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" required thfield="*{name}" name="name" id="name" placeholder="Enter name" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
        </p>
         </div>
     );
  }
  export default addcategory;
