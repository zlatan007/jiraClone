import TaskList from "../../pages/TaskList";
import UserInformation from "../../pages/UserInformation";
import UserList from "../../pages/UserList";

export const routeConfig = [{
    component: <TaskList />,
    path: "/tasklist",
    isProtectedRoute: true,
    isLayoutNeeded: true,
},
{
    component: <UserInformation />,
    path: "/userinformation/:id",
    isProtectedRoute: true,
    isLayoutNeeded: true,
},
{
    component: <UserList />,
    path: "/userList",
    isProtectedRoute: true,
    isLayoutNeeded: true,
},
]