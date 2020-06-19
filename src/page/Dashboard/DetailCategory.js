import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCollection, changeStatusRunning } from '../../store/admin/action'
import { objectIdToDate } from '../../utils/date'
import { Link } from 'react-router-dom'
import * as categoryActions from '../../store/category/action'
import { confirmAlert } from 'react-confirm-alert' // Import
import { useHistory } from 'react-router-dom'

export default React.memo(function DetailCollection() {
  const dispatch = useDispatch()
  const admin = useSelector((state) => state.admin)
  const history = useHistory()

  const [categoryDeletes, setCategoryDeletes] = useState([])

  useEffect(() => {
    dispatch(getAllCollection())
  }, [])

  const handleDeleteCategory = (idCategory) => {
    const categoryDelete = [...categoryDeletes]
    categoryDelete.push(idCategory)
    setCategoryDeletes(categoryDelete)
    console.log(categoryDeletes)
    dispatch(categoryActions.deleteCategory(idCategory))
  }

  const deleteCategory = (_id) => {
    confirmAlert({
      title: 'Xóa câu hỏi',
      message: 'Bạn có chắc chắn muốn xóa câu hỏi này',
      buttons: [
        {
          label: 'Đồng ý',
          onClick: () => handleDeleteCategory(_id),
        },
        {
          label: 'Không',
          onClick: () => alert('Hủy'),
        },
      ],
    })
  }

  const onUpdateCategory = async (id) => {
    await dispatch(categoryActions.setItemSelected(id))
    history.push('/dashboard/category-update')
  }

  return (
    <div className="container-fluid">
      <div className="shadow mb-4">
        <div className="card h-100">
          <div className="card-header py-3 d-flex bd-highlight mb-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Danh sách Category
            </h6>
            <Link
              to="/dashboard/create-category"
              className="btn btn-primary ml-auto">
              <small>Tạo Category</small>
              <i
                className="fas fa-folder-plus"
                style={{ paddingLeft: '5px' }}
              />
            </Link>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <DetailTable
                admin={admin}
                deleteCategory={deleteCategory}
                categoryDeletes={categoryDeletes}
                onUpdateCategory={onUpdateCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
function DetailTable({
  admin,
  deleteCategory,
  categoryDeletes,
  onUpdateCategory,
}) {
  return (
    <table className="table table-shopping">
      <thead className>
        <tr>
          <th className="align-middle" />
          <th>Title</th>
          <th className="align-middle">Description</th>
          <th className="align-middle">Ngày tạo</th>
          <th className="align-middle">Action</th>
        </tr>
      </thead>

      <tbody>
        {admin && admin.allCollection ? (
          admin.allCollection.map((item, i) => {
            const categoryDt = categoryDeletes.find(
              (id) => id.toString() === item._id.toString()
            )
            return (
              <>
                {categoryDt ? (
                  <></>
                ) : (
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
                    <td className="td-actions ">
                      <button
                        onClick={() => onUpdateCategory(i)}
                        type="button"
                        rel="tooltip"
                        data-placement="left"
                        title
                        className="btn btn-neutral"
                        data-original-title="Remove item">
                        <i className="fas fa-info-circle"></i>
                      </button>
                      <button
                        type="button"
                        rel="tooltip"
                        data-placement="left"
                        title
                        className="btn btn-neutral"
                        style={{ color: 'red' }}
                        data-original-title="Remove item"
                        onClick={() => deleteCategory(item._id)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                )}
              </>
            )
          })
        ) : (
          <tr>
            <td>Loading ...</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
