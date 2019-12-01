import React from 'react'
import { Link} from 'react-router-dom'

export const CreateQuiz = () => {
  return (
    <div className="col-6">
      <Link to="/quest/create" className="btn-create-quiz"> Tạo thử thách mới </Link>
    </div>
  )
}
