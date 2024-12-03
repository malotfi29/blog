import { useEffect, useState } from "react";
import usegetAllBlogsCategory from "../../blogs/useBlogs";
import useCreatePost from "./useCreatePost";
import { Controller, useForm } from "react-hook-form";
import RHFInput from "../../../ui/RHFInput";
import RHFSelect from "../../../ui/RHFSelect";
import Button from "../../../ui/Button";
import { SpinnerMini } from "../../../ui/Spinner";
import { imageUrlToFile } from "../../../utils/fileFormatter";
import FileInput from "../../../ui/FileInput";
import ButtonIcon from "../../../ui/ButtonIcon";
import { XMarkIcon } from "@heroicons/react/24/outline";
import useEditPost from "./useEditPost";

function CreatePostForm({ postToEdit = {}, setOpen }) {
  
  const { _id: editId } = postToEdit;
  const {
    title,
    text,
    slug,
    briefText,
    readingTime,
    category,
    coverImage,
    coverImageUrl: prevCoverImage,
  } = postToEdit;
  const isEditSession = Boolean(editId);
  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      text,
      slug,
      briefText,
      readingTime,
      category: category._id,
      coverImage,
    };
  }

  const { categories } = usegetAllBlogsCategory();

  const [coverImageUrl, setCoverImageUrl] = useState(prevCoverImage || null);
  const { isCreating, createPost } = useCreatePost();
  const { isEditing, editPost } = useEditPost();

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
    watch,
  } = useForm({
    defaultValues: editValues,
  });

  useEffect(() => {
    if (prevCoverImage) {
      async function fetchMyApi() {
        const file = await imageUrlToFile(prevCoverImage);
        setValue("coverImage", file);
      }
      fetchMyApi();
    }
  }, [editId]);

  const onSubmit = (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    if (isEditSession) {
      editPost(
        { id: editId, data: formData },
        {
          onSuccess: () => {
            // router.push("/profile/posts");
            // navigate("/profile/posts")
            setOpen(false);

            reset();
          },
        }
      );
    } else {
      createPost(formData, {
        onSuccess: () => {
          setOpen(false);

          reset();
        },
        onError: () => {
          console.log(err?.response?.data?.message);
        },
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <RHFInput
        label="عنوان"
        errors={errors}
        register={register}
        name="title"
        isRequired
        validationSchema={{
          required: "نام و نام خانوادگی ضروری است",
          minLength: {
            value: 5,
            message: "طول نام و نام خانوادگی نامعتبر است",
          },
        }}
      />
      <RHFInput
        label="متن کوتاه"
        errors={errors}
        register={register}
        name="briefText"
        isRequired
        validationSchema={{
          required: "   متن کوتاه ضروری است",
          minLength: {
            value: 5,
            message: "طول متن کوتاه نامعتبر است",
          },
        }}
      />
      <RHFInput
        label="متن"
        errors={errors}
        register={register}
        name="text"
        isRequired
        validationSchema={{
          required: "   متن ضروری است",
        }}
      />
      <RHFInput
        label="اسلاگ"
        errors={errors}
        register={register}
        name="slug"
        isRequired
        validationSchema={{
          required: "   اسلاگ ضروری است",
        }}
      />
      <RHFInput
        label="زمان مطالعه"
        errors={errors}
        register={register}
        name="readingTime"
        isRequired
        validationSchema={{
          required: "   زمان مطالعه ضروری است",
        }}
      />
      <RHFSelect
        label="دسته بندی"
        errors={errors}
        register={register}
        name="category"
        isRequired
        options={categories || []}
      />
      <Controller
        name="coverImage"
        control={control}
        render={({ field: { value, onChange, ...rest } }) => {
          return (
            <FileInput
              label="انتخاب کاور پست"
              name="coverImage"
              isRequired
              {...rest}
              errors={errors}
              value={value?.fileName}
              onChange={(event) => {
                const file = event.target.files[0];
                onChange(file);
                setCoverImageUrl(URL.createObjectURL(file));
                event.target.value = null;
              }}
            />
          );
        }}
        rules={{ required: "کاور پست الزامی است" }}
      />
      {coverImageUrl && (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          {/* <Image
            fill
            alt="cover-image"
            src={coverImageUrl}
            className="object-cover object-center"
          /> */}
          <img
            src={coverImageUrl}
            alt="cover-image"
            className="object-cover object-center"
          />
          <ButtonIcon
            variant="red"
            className="w-6 h-6 absolute left-0"
            onClick={() => {
              setCoverImageUrl(null);
              setValue("coverImage", null);
            }}
          >
            <XMarkIcon />
          </ButtonIcon>
        </div>
      )}
      <div className="">
        {isCreating ? (
          <SpinnerMini />
        ) : (
          <Button className="w-full" variant="primary" type="submit">
            تایید
          </Button>
        )}
      </div>
    </form>
  );
}

export default CreatePostForm;
