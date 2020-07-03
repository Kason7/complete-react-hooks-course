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
      <h3>{props.firstname}</h3>
      <h2>{props.lastname}</h2>
      {props.firstname === 'Joan' && <div style={{ color: 'green' }}>VIP</div>}
    </>
  );
};

export default nameTag;
