import React from 'react'

const Alert = ({ type = 'danger', text }) => {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center z-50">
      <div
        className={`${
          type === 'danger' ? 'bg-red-800' : 'bg-blue-800'
        } text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg`}
        role="alert"
      >
        <span
          className={`${
            type === 'danger' ? 'bg-red-500' : 'bg-blue-500'
          } uppercase text-xs font-semibold px-3 py-1 rounded-full`}
        >
          {type === 'danger' ? 'Failed' : 'Success'}
        </span>

        <span className="text-sm font-medium">
          {text}
        </span>
      </div>
    </div>
  )
}

export default Alert
