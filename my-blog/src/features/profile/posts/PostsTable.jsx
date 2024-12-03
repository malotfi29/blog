import Table from "../../../ui/Table";
import usegetAllPosts from "../../posts/usePosts";
import PostRow from "./PostRow";
import Search from "../../../ui/Search";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import { PlusIcon } from "@heroicons/react/24/outline";
import CreatePostForm from "./CreatePostForm";

function PostsTable() {
  const [open, setOpen] = useState(false);
  const { posts } = usegetAllPosts();

  if (!posts) return <p>پستی وجود ندارد</p>;
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-lg text-secondary-600 font-bold">پست ها</h1>
        <Search />
        {/* <CreatePost /> */}
        <button
          onClick={() => setOpen(true)}
          className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0 
                    transition-colors hover:bg-primary-700"
        >
          <span className="hidden md:block">ایجاد پست</span>{" "}
          <PlusIcon className="w-5" />
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="ایجاد پست جدید"
        >
          <CreatePostForm setOpen={setOpen}/>
        </Modal>
      </div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان</th>
          <th>دسته بندی</th>
          <th>نویسنده</th>
          <th>تاریخ ایجاد</th>
          <th>نوع</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {posts.map((post, index) => (
            <PostRow key={post._id} post={post} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default PostsTable;
