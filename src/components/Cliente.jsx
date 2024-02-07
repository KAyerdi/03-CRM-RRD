import React from 'react';

const Cliente = ({cliente}) => {

  const {nombre, empresa, email, telefono, id } = cliente
  return (
    <div>
      {" "}
      <tr>
        <td className='p-6'>{nombre}</td>
      </tr>
    </div>
  );
}

export default Cliente