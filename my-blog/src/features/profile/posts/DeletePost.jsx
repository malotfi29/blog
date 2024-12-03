import { useState } from "react";
import useDeletePost from "./useDeletePost";
import { TrashIcon } from "@heroicons/react/24/outline";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete"
import ButtonIcon from "../../../ui/ButtonIcon";

export default function DeletePost({ post: { _id:id, title } }) {
    const [open, setOpen] = useState(false);
    const{isDeleting,deletePost}=useDeletePost()
   
    return (
      <>
        <ButtonIcon variant="outline" onClick={() => setOpen(true)}>
          <TrashIcon className="text-error" />
        </ButtonIcon>
        <Modal title={`حذف ${title}`} open={open} onClose={() => setOpen(false)}>
          <ConfirmDelete
            resourceName={title}
            onClose={() => setOpen(false)}
            disabled={isDeleting}
            onConfirm={(e) => {
              e.preventDefault()
              deletePost(id,{
                onSuccess:()=>{
                  setOpen(false)
                 
  
                }
              })
            }}
          />
        </Modal>
      </>
    );
  }