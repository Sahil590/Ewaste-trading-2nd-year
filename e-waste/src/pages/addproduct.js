import React from 'react';
 
const addproduct = () => {
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
    <h3>Add a new Product</h3>
    <form thaction="@{/admin/products/add}" method="post" thobject="${productDTO}" encType="multipart/form-data">
      <div className="row">
        <div className="col-sm-5">
          <input type="hidden" name="id" thfield="*{id}" />
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" required thfield="*{name}" name="name" id="name" placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label htmlFor="category">Select Category</label>
            <select className="form-control" thfield="*{categoryId}" id="category" name="category">
              <option theach="category :${categories}" thvalue="${category.id}" thtext="${category.name}">
              </option></select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="number" className="form-control" required thfield="*{price}" name="price" id="price" placeholder="Price" />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight in grams</label>
            <input type="number" className="form-control" required thfield="*{weight}" name="weight" id="weight" placeholder="Weight" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Product Description</label>
            <textarea className="form-control" rows={5} thfield="*{description}" name="description" id="description" defaultValue={""} />
          </div>
        </div>
        <div className="col-sm-5">
          <p>Product Image</p>
          <div className="custom-file">
            <input type="file" className="custom-file-input" name="productImage" accept="image/jpeg, image/png" id="productImage" />
            <label className="custom-file-label" htmlFor="productImage">Choose file</label>
          </div>
          <div className="form-group">
            <img src="#" id="imgPreview" height="100px" width="100px" thsrc="@{${'/productImages/' + productDTO.imageName}}" style={{marginTop: 20}} alt=" " />
          </div>
          <input type="hidden" name="imgName" thvalue="${productDTO.imageName}" />
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>

        </div>
    );
}
export default addproduct;