import CustomTextField from "../../components/Shared/CustomTextField";
import TaskListComponent from "../../components/TaskList";

const TaskList = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <div className="w-[200px]">
          <CustomTextField
            size="sm"
            placeholder="Search tasks..."
            inputClassName="!px-0 !py-0"
            rootClassName="!p-0"
            name="search"
            value=""
            required={false}
            disabled={false}
            error=""
            handleBlur={() => {}}
          />
        </div>

        <div className="flex items-center">
          {[
            { id: 1, name: "Alex", avatar: "https://i.pravatar.cc/150?img=1" },
            { id: 2, name: "Ria", avatar: "https://i.pravatar.cc/150?img=2" },
            { id: 3, name: "Jane", avatar: "https://i.pravatar.cc/150?img=3" },
          ].map((user, index) => (
            <img
              key={user.id}
              src={user.avatar}
              alt={user.name}
              title={user.name}
              className={`w-9 h-9 rounded-full border-2 border-white cursor-pointer hover:ring-2 hover:ring-indigo-500 ${
                index !== 0 ? "-ml-3" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <TaskListComponent />
    </div>
  );
};

export default TaskList;
