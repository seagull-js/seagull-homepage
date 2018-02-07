import * as React from 'react'

export default ({ title, children }) => (
  <div className="panel panel-default">
    <div className="panel-heading">
      <h3 style={{ margin: '0' }}>{title}</h3>
    </div>
    <div className="panel-body">
      <p>{children}</p>
    </div>
  </div>
)
