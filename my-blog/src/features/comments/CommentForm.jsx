import Loader from "../../ui/Loader";
import TextArea from "../../ui/TextArea";
import SubmitButton from "../../ui/SubmitButton";
import { useForm } from "react-hook-form";
import useAddComment from "./useAddComment";

const CommentForm = ({ postId, parentId, onClose, user }) => {
  const userId = user._id;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { addComment, isLoading } = useAddComment();
  
  const onSubmit = (data) => {
    addComment({ ...data, userId, postId });
    onClose();
  };

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form className="space-y-7" onSubmit={handleSubmit(onSubmit)}>
            <TextArea
              register={register}
              name="text"
              label="متن نظر"
              isRequired
            />
            <div className="mt-8">
              {isLoading ? (
                <div>
                  <Loader />
                </div>
              ) : (
                <SubmitButton type="submit" className="w-full">
                  {parentId ? "ثبت پاسخ" : "ثبت نظر"}
                </SubmitButton>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
