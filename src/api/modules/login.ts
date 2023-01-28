import DynamicRouter from "@/assets/json/dynamicRouter.json";
import AuthButtons from "@/assets/json/authButtons.json";
import { Login } from "@/api/interface";

// 执行登录
export const loginApi = (params:Login.ReqLoginForm) => {
	return  {
		"code":200,
		"msg":"success",
		"data":{"access_token":"this_is_login_test_token"}
	}
};


// * 获取按钮权限
export const getAuthButtonListApi = () => {
	//return http.get<Login.ResAuthButtons>(PORT1 + `/auth/buttons`, {}, { headers: { noLoading: true } });
	// 如果想让按钮权限变为本地数据，注释上一行代码，并引入本地 authButtons.json 数据
	return AuthButtons;
};

// * 获取菜单列表
export const getAuthMenuListApi = () => {
	//return http.get<Menu.MenuOptions[]>(PORT1 + `/menu/list`, {}, { headers: { noLoading: true } });
	// 如果想让菜单变为本地数据，注释上一行代码，并引入本地 dynamicRouter.json 数据
	return DynamicRouter;
}

export const logoutApi = () => {
	return []
};