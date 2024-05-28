import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  console.log("登录用户信息", store.state.user.loginUser);

  const loginUser = store.state.user.loginUser;

  //如果之前没登录过，执行自动登录
  if (!loginUser || !loginUser.role) {
    //加await 是为了等用户登录成功后，再执行后续的代码
    await store.dispatch("user/getLoginUser");
  }
  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  //要跳转的页面必须要登录
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    //如果没登陆，跳转到登录页面
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirectUrl=${to.fullPath}`);
      return;
    }
    //如果已经登录，但是权限不足，跳转到无权限页面
    if (!checkAccess(loginUser, needAccess)) {
      next(`/noAuth`);
      return;
    }
  }
  next();
});
