import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCollection, changeStatusRunning } from '../../store/admin/action'
import { objectIdToDate } from '../../utils/date'

export default React.memo(function DetailCollection() {
  const dispatch = useDispatch()
  const admin = useSelector((state) => state.admin)
  useEffect(() => {
    dispatch(getAllCollection())
  }, [])
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Danh sách Collection</h1>
      <div className="shadow mb-4">
        <div className="card h-100">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Danh sách Collection
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <DetailTable admin={admin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
function DetailTable({ admin }) {
  return (
    <table className="table table-shopping">
      <thead className>
        <tr>
          <th className="align-middle" />
          <th>Title</th>
          <th className="align-middle">Description</th>
          <th className="align-middle">Ngày tạo</th>
          {/* <th className="align-middle">Amount</th> */}
        </tr>
      </thead>

      <tbody>
        {admin && admin.allCollection
          ? admin.allCollection.map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <div className="img-container">
                      <img
                        src={item.img_path ? item.img_path : ''}
                        alt="..."
                        className="max-width"
                      />
                    </div>
                  </td>
                  <td className="td-name">{item.name}</td>
                  <td className="td-number">{item.name}</td>
                  <td className="td-number">{objectIdToDate(item._id)}</td>
                  {/* <td className="td-number">
                        <small>€</small>549
                      </td> */}
                  {/* <td className="td-actions">
                        <button
                          type="button"
                          rel="tooltip"
                          data-placement="left"
                          title
                          className="btn btn-neutral"
                          data-original-title="Remove item">
                          <i className="nc-icon nc-simple-remove" />
                        </button>
                      </td> */}
                </tr>
              )
            })
          : 'Loading ...'}
      </tbody>
    </table>
  )
}
