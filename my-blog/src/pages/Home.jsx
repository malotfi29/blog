import { useEffect } from "react";
import usegetUser from "../features/auth/useProfile";
import CustomNavLink from "../ui/CustomeNavLink";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { user } = usegetUser();
  useEffect(() => {
    if (!user) navigate("/");
  }, [user]);
  return (
    <div>
      <h1 className="font-bold text-center text-2xl md:text-5xl text-secondary-800 my-20">
        اپلیکیشن مدیریت بلاگ
      </h1>

      <div>
        <p className="text-center text-secondary-500 text-lg leading-loose">
          جایی که قراره بتونی یه اپلیکیشن بلاگ کامل رو مدیریت کنی!
          <br /> بتونی بلاگ بسازی - کامنت بگذاری و در پنلت همه اتفاقات رو رصد
          کنی!
        </p>
        <div className="flex justify-center gap-x-8 w-full mt-10">
          {user ? (
            <CustomNavLink to="blogsLayout">
              <span className="btn btn--primary">مطالعه بلاگ ها</span>
            </CustomNavLink>
          ) : (
            ""
          )}

          {user ? (
            <CustomNavLink to="profile">
              <span className="btn btn--primary"> مشاهده پروفایل</span>
            </CustomNavLink>
          ) : (
            <CustomNavLink to="signin">
              <span className="btn btn--primary">ورود/ثبت نام</span>
            </CustomNavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
