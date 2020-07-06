import React from 'react';

export const nameTag = (props) => {
  if (!props.firstname && !props.lastname) {
    return (
      <div className='name'>
        <h3>Invalid Name</h3>
      </div>
    );
  }

  return (
    <>
      <p>{props.firstname}</p>
      <p>{props.lastname}</p>
      {props.firstname === 'Joan' && <div style={{ color: 'green' }}>VIP</div>}
    </>
  );
};

export default nameTag;
