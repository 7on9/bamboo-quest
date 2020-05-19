import React from 'react'
import './comon/styles.css'
export default function Collection() {
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
                        placeholder="Title *"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Description *"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-12">Image file</label>
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
