import React, { useEffect } from 'react'
import ItemTableQuest from './comon/ItemtableQuest'
import { useDispatch, useSelector } from 'react-redux'
import { getAllQuests, setPage, setItem } from '../../store/admin-quest/action'
import Pagination from 'react-js-pagination'
export default function Table() {
  const dispatch = useDispatch()
  const redux = useSelector((state) => state.adminQuest)
  useEffect(() => {
    dispatch(getAllQuests(redux.page))
  }, [redux.page])
  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber))
  }
  const handleSetItem = (item, index) => {
    item = (redux.page - 1) * 5 + index
    dispatch(setItem(item))
  }
  console.log(redux)
  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Danh sách cuộc thi</h1>
      {/* DataTales Example */}
      <div className="shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Danh sách cuộc thi
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing={0}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên cuộc thi</th>
                  {/* <th>Ngày tạo</th> */}
                  <th>Người tạo</th>
                  <th>Số câu hỏi</th>
                  <th></th>
                </tr>
              </thead>
              {redux.quest.length > 0 ? (
                <tbody>
                  {redux.quest.map((item, index) => (
                    <ItemTableQuest
                      name={item.title}
                      creator={item.id_author}
                      countQuestion={1}
                      id={item._id}
                      handleSetItem={() => handleSetItem(item, index)}
                    />
                  ))}
                </tbody>
              ) : (
                <tbody />
              )}
            </table>
            <div style={{ justifyContent: 'flex-end' }}>
              <Pagination
                hideDisabled
                itemClass="page-item"
                linkClass="page-link"
                activePage={redux.page}
                itemsCountPerPage={1}
                totalItemsCount={redux.count / 5}
                pageRangeDisplayed={3}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
