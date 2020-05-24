import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Card from './comon/Card'
import {
  getCount,
  changeStatusRunning,
  getQuestDashboard,
  getUserDashboard,
} from './../../store/admin/action'
import { objectIdToDate } from '../../utils/date'
const Home = () => {
  const [data, setData] = useState([])
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()

  const admin = useSelector((state) => state.admin)

  useEffect(() => {
    dispatch(getCount('user'))
    dispatch(getCount('quest'))
    dispatch(getCount('game'))
    dispatch(getCount('category'))
    dispatch(getQuestDashboard())
    dispatch(getUserDashboard())
    dispatch(changeStatusRunning(true))
  }, [])
  useEffect(() => {
    if (admin.questDashboard) {
      setData(
        admin.questDashboard.sort(
          (likeMin, likeMax) => likeMax.like.length - likeMin.like.length
        )
      )
    }
  }, [admin.questDashboard])
  useEffect(() => {
    if (admin.userDashboard) {
      setUsers(
        admin.userDashboard.sort((createEarly, createLatest) => {
          let dateLatest = new Date(
            objectIdToDate(createLatest._id, 'yyyy/mm/dd')
          )
          let dateEarly = new Date(
            objectIdToDate(createEarly._id, 'yyyy/mm/dd')
          )
          return dateLatest - dateEarly
        })
      )
    }
  }, [admin.userDashboard])
  console.log(users)
  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>
      {/* Content Row */}
      <div className="row">
        <Card
          type={'primary'}
          lable="Số câu hỏi"
          value={admin.running ? 'loadding' : admin.countQuiz}
        />
        <Card
          type={'success'}
          lable="Số người dùng"
          value={admin.running ? 'loadding' : admin.countUser}
        />
        <Card
          type={'info'}
          lable="Số Game đã tạo"
          value={admin.running ? 'loadding' : admin.countGame}
        />
        <Card
          type={'warning'}
          lable="Số thể loại"
          value={admin.running ? 'loadding' : admin.countCategory}
        />
      </div>
      {/* Content Row */}
      <div className="row">
        {/* Area Chart */}
        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            {/* Card Header - Dropdown */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Danh sách cuộc thi được like nhiều
              </h6>
              {/* <div className="dropdown no-arrow">
              </div> */}
            </div>
            {/* Card Body */}
            <div className="card-body">
              <div className="chart-area table-responsive h-100">
                {/* <canvas id="myAreaChart" /> */}
                {data ? <TableQuest props={data} /> : 'Loading...'}
              </div>
            </div>
          </div>
        </div>
        {/* Pie Chart */}
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            {/* Card Header - Dropdown */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Danh sách tài khoản mới tạo
              </h6>
              {/* <div className="dropdown no-arrow">
              </div> */}
            </div>
            {/* Card Body */}
            <div className="card-body">
              <div className="chart-pie pt-4 pb-2 table-responsive h-100">
                {/* <canvas id="myPieChart" /> */}
                {users ? <TableUser props={users} /> : 'Loading...'}
              </div>
              <div className="mt-4 text-center small">
                <span className="mr-2">
                  <i className="fas fa-circle text-primary" /> Direct
                </span>
                <span className="mr-2">
                  <i className="fas fa-circle text-success" /> Social
                </span>
                <span className="mr-2">
                  <i className="fas fa-circle text-info" /> Referral
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content Row */}
      <div className="row">
        {/* Content Column */}
        <div className="col-lg-6 mb-4">
          {/* Project Card Example */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div className="card-body">
              <h4 className="small font-weight-bold">
                Server Migration <span className="float-right">20%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: '20%' }}
                  aria-valuenow={20}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <h4 className="small font-weight-bold">
                Sales Tracking <span className="float-right">40%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: '40%' }}
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <h4 className="small font-weight-bold">
                Customer Database <span className="float-right">60%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '60%' }}
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <h4 className="small font-weight-bold">
                Payout Details <span className="float-right">80%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: '80%' }}
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <h4 className="small font-weight-bold">
                Account Setup <span className="float-right">Complete!</span>
              </h4>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: '100%' }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
          {/* Color System */}
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-primary text-white shadow">
                <div className="card-body">
                  Primary
                  <div className="text-white-50 small">#4e73df</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-success text-white shadow">
                <div className="card-body">
                  Success
                  <div className="text-white-50 small">#1cc88a</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-info text-white shadow">
                <div className="card-body">
                  Info
                  <div className="text-white-50 small">#36b9cc</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-warning text-white shadow">
                <div className="card-body">
                  Warning
                  <div className="text-white-50 small">#f6c23e</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-danger text-white shadow">
                <div className="card-body">
                  Danger
                  <div className="text-white-50 small">#e74a3b</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-secondary text-white shadow">
                <div className="card-body">
                  Secondary
                  <div className="text-white-50 small">#858796</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          {/* Illustrations */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Illustrations
              </h6>
            </div>
            <div className="card-body">
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: '25rem' }}
                  src="img/undraw_posting_photo.svg"
                  alt=""
                />
              </div>
              <p>
                Add some quality, svg illustrations to your project courtesy of{' '}
                <Link target="_blank" rel="nofollow" href="https://undraw.co/">
                  unDraw
                </Link>
                , a constantly updated collection of beautiful svg images that
                you can use completely free and without attribution!
              </p>
              <Link target="_blank" rel="nofollow" href="https://undraw.co/">
                Browse Illustrations on unDraw →
              </Link>
            </div>
          </div>
          {/* Approach */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Development Approach
              </h6>
            </div>
            <div className="card-body">
              <p>
                SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
                order to reduce CSS bloat and poor page performance. Custom CSS
                classes are used to create custom components and custom utility
                classes.
              </p>
              <p className="mb-0">
                Before working with this theme, you should become familiar with
                the Bootstrap framework, especially the utility classes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Home)

function TableQuest({ props }) {
  return (
    <table
      className="table table-bordered"
      width="100%"
      cellSpacing={0}
      style={{ position: 'absolute', height: '100%', overflowY: 'scroll' }}>
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên cuộc thi</th>
          {/* <th>Ngày tạo</th> */}
          <th>Tổng lượt like</th>
          {/* <th>Số câu hỏi</th> */}
        </tr>
      </thead>
      {props ? (
        props.map((item, i) => (
          <tbody>
            <tr>
              <td>{i + 1}</td>
              <td>{item.title}</td>
              <td>{item.like.length}</td>
              {/* <td>{props.countQuestion}</td> */}
            </tr>
          </tbody>
        ))
      ) : (
        <tbody />
      )}
    </table>
  )
}
function TableUser({ props }) {
  return (
    <table
      className="table table-bordered"
      width="100%"
      cellSpacing={0}
      style={{ position: 'absolute', height: '100%', overflowY: 'scroll' }}>
      <thead>
        <tr>
          <th>STT</th>
          <th>Username</th>
          {/* <th>Ngày tạo</th> */}
          <th>Email</th>
          <th>Ngày tạo</th>
        </tr>
      </thead>
      {props ? (
        props.map((item, i) => (
          <tbody>
            <tr>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{objectIdToDate(item._id)}</td>
            </tr>
          </tbody>
        ))
      ) : (
        <tbody />
      )}
    </table>
  )
}
