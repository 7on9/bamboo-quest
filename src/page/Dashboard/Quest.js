import React, { Component } from 'react'
import ItemTableQuest from './comon/ItemtableQuest'

export default class Table extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* Page Heading */}
        <h1 className="h3 mb-2 text-gray-800">Danh sách cuộc thi</h1>
        {/* DataTales Example */}
        <div className="shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Danh sách cuộc thi</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tên cuộc thi</th>
                    <th>Ngày tạo</th>
                    <th>Người tạo</th>
                    <th>Số câu hỏi</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <ItemTableQuest id={1} name={'Ai la trieu phu'} created={'11/11/2020'} creator={'Pham Hong Quan'} countQuestion={1}/>
                  <ItemTableQuest id={1} name={'Ai la trieu phu'} created={'11/11/2020'} creator={'Pham Hong Quan'} countQuestion={1}/>
                  <ItemTableQuest id={1} name={'Ai la trieu phu'} created={'11/11/2020'} creator={'Pham Hong Quan'} countQuestion={1}/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
