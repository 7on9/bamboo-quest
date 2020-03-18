import React, { Component } from 'react'
import ItemTableUser from './comon/ItemTableUser'

export default class Table extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* Page Heading */}
        <h1 className="h3 mb-2 text-gray-800">Danh sách người dùng</h1>
        {/* DataTales Example */}
        <div className="shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Danh sách người dùng</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Ngày tạo</th>
                    <th>Lượng game đã tham gia</th>
                    <th>Số cuộc thi đã tạo</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <ItemTableUser id={1} username={'Pham Hong Quan'} email={'phq@gmail.com'} createAt={'15/05/2020'} countJoin={1} countQuestCreated={1}/>
                  <ItemTableUser id={1} username={'Pham Hong Quan'} email={'phq@gmail.com'} createAt={'15/05/2020'} countJoin={1} countQuestCreated={1}/>
                  <ItemTableUser id={1} username={'Pham Hong Quan'} email={'phq@gmail.com'} createAt={'15/05/2020'} countJoin={1} countQuestCreated={1}/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
