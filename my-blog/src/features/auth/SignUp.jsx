import { useForm } from "react-hook-form";
import RHFInput from "../../ui/RHFInput";
import useSignup from "./useSignup";
import Loader from "../../ui/Loader";


function SignUn() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const{signup,isLoading}=useSignup()

  
  const onSubmit = (values) => {
    signup(values,{
      onSuccess:console.log(values)
      
    })
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-1/3 mt-10 mx-auto gap-y-8 px-4 py-8 border rounded-md"
    >
      <RHFInput
        name="name"
        label="نام و نام خانوادگی"
        validationSchema={{
          required: "نام و نام خانوادگی ضروری است",
          minLength: {
            value: 5,
            message: "طول نام و نام خانوادگی نامعتبر است",
          },
        }}
        register={register}
        isRequired
        errors={errors}
      />
      <RHFInput
        name="email"
        label="ایمیل"
        dir="ltr"
        type="email"
        register={register}
        validationSchema={{
          required: "ایمیل ضروری است",
        }}
        isRequired
        errors={errors}
      />
      <RHFInput
        name="password"
        label="گذرواژه"
        dir="ltr"
        type="password"
        register={register}
        validationSchema={{
          required: "گذرواژه ضروری است",
        }}
        isRequired
        errors={errors}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      )}
    </form>
  );
}

export default SignUn;
