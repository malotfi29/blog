import { PencilIcon } from "@heroicons/react/24/outline"
import ButtonIcon from "../../../ui/ButtonIcon"
import Table from "../../../ui/Table"
import { toPersianDigits } from "../../../utils/numberFormatter"
import truncateText from "../../../utils/trancateText"
import { useState } from "react"
import Modal from "../../../ui/Modal"
import CreatePostForm from "./CreatePostForm"
import DeletePost from "./DeletePost"

const typeStyle={
    free:{
      label:"رایگان",
      className:"badge--success",
    },
    premium:{
      label:"پولی",
      className:"badge--secondary",
    },
  }

function PostRow({index,post}) {
    const{title,category,author,createdAt,type}=post
    const[openEdit,setOpenEdit]=useState(false)
    return <Table.Row>
      <td>{toPersianDigits(index+1)}</td>
      <td>{truncateText(title,30)}</td>
      <td>{category.title}</td>
      <td>{author.name}</td>
      <td>{new Date(createdAt).toLocaleDateString("fa-IR")}</td>
      <td>
        <span className={`badge ${typeStyle[type].className}`}>{typeStyle[type].label}</span>
  
      </td>
      <td>
        <div className="flex items-center gap-x-3">
        <div>
        <ButtonIcon onClick={()=>setOpenEdit(true)} variant="outline">
        <PencilIcon />
      </ButtonIcon>
      <Modal title="ویرایش پست" open={openEdit} onClose={()=>setOpenEdit(false)}>
        <CreatePostForm postToEdit={post} setOpen={setOpenEdit}/>
      </Modal>
        </div>
        
          <DeletePost post={post}/>
          
        </div>
      </td>
    </Table.Row>
}

export default PostRow
