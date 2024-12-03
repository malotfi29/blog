import { useForm } from "react-hook-form";
import RHFInput from "../../ui/RHFInput";
import useSignin from "./useSignin";
import Loader from "../../ui/Loader";

import { NavLink, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import usegetAllUser from "../profile/useGatAllUser";



function SignIn() {

  
  
 
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signin, isLoading } = useSignin();
  
  

  const onSubmit = (values) => {
    signin(values, {
      onSuccess:()=> navigate("/"),
    });
  };

  return (
    <div className=" border rounded-md  w-1/3 mt-10 mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-8 px-4 py-8"
      >
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
      <NavLink
        to="/signup"
        className="text-secondary-500 flex items-center justify-center mb-2"
      >
        <span>ایجاد حساب کاربری</span>
      </NavLink>
    </div>
  );
}

export default SignIn;
