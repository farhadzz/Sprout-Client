import { useDispatch } from "react-redux"
import { deleteUser } from '../store/action/userAction'
import { onlyCapitalLetters } from '../helpers/capLetter'
import Swal from 'sweetalert2'

export default function TableBody(props) {
  const dispatch = useDispatch()

  const deleteHandler = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    })
    .then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(id))
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } 
    })
    
  }

  return (
    <>
      <tr>
        <td className="text-right"><span style={{height: "30px", width: "30px", display: "inline-block", backgroundColor:"#F69621", borderRadius:"50%", color: "white", textAlign:"center"}}>{ onlyCapitalLetters(props.data.name) }</span></td>
        <td className="text-left" style={{width: "20%", color:"#4D4F5B"}}>{props.data.name}</td>
        <td className="text-left" style={{width: "20%", color:"#4D4F5B"}}>{props.data.phone_number}</td>
        <td className="text-left" style={{width: "20%", color:"#4D4F5B"}}>{props.data.email}</td>
        <td className="text-left" style={{width: "20%", color:"#4D4F5B"}}><i className="fa fa-trash" onClick={() => deleteHandler(props.data._id)} style={{cursor: "pointer", color: 'red'}}></i></td>
      </tr>
    </>  
  )
}