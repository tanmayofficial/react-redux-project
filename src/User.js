import React from 'react'

function User(props) {
  const{data}=props;


  return (
    <div>
        <h1>User Component</h1>
        <h4>{data.name}</h4>
        <h5>{data.age}</h5>
    </div>
  )
}

export default User