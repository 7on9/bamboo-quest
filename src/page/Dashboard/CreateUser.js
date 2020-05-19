import React from 'react'

export default function CreateUser() {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Collection</h1>
      <div className="shadow mb-4">
        <div className="card-header py-3">
          {/* <h6 className="m-0 font-weight-bold text-primary">Thông tin</h6>
              <div style={{ marginBottom: '15px' }} /> */}
          <div className="container register-form">
            <div className="form">
              <div className="note">
                <p>Thông tin</p>
              </div>
              <div className="form-content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email *"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password *"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name *"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <NavMenu />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-12">Avatar</label>
                  <div className="col-md-12">
                    <div className="custom-file">
                      <input
                        type="file"
                        name="avatar_path"
                        id="customFile"
                        className="custom-file-input"
                        //   onChange={handleChange}
                        // value={values.avatar_path}
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        Choose file
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btnSubmit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavMenu() {
  return (
    <div className="container">
      <div className="row">
        <div className="dropdown">
          <a
            id="dLabel"
            role="button"
            data-toggle="dropdown"
            className="btn btn-primary"
            data-target="#"
            href="/page.html">
            Dropdown <span className="caret" />
          </a>
          <ul
            className="dropdown-menu multi-level"
            role="menu"
            aria-labelledby="dropdownMenu">
            <li>
              <a href="#">User</a>
            </li>

            <li className="dropdown-submenu">
              <a tabIndex={-1} href="#">
                Admin
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a tabIndex={-1} href="#">
                    Admin super
                  </a>
                </li>
                <li>
                  <a href="#">Admin Normal</a>
                </li>
                {/* <li className="dropdown-submenu">
                  <a href="#">Even More..</a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">3rd level</a>
                    </li>
                    <li>
                      <a href="#">3rd level</a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
