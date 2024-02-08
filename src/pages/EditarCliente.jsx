import { obtenerCliente } from "../data/Clientes"

export async function loader({params}){
  const cliente = await obtenerCliente(params.clienteId)
  console.log(cliente)
}

function EditarCliente() {
  return (
    <div>EditarCliente</div>
  )
}

export default EditarCliente