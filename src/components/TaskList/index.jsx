import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useState } from 'react';

const initialColumns = {
  todo: {
    title: 'TO DO',
    items: [
      {
        id: '1',
        content: 'Implement feedback collector',
        description: 'Collect user feedback via modal',
        assignees: [
          { id: 'u1', name: 'Alex', avatar: 'https://i.pravatar.cc/150?img=1' },
          { id: 'u2', name: 'Ria', avatar: 'https://i.pravatar.cc/150?img=2' },
        ],
      },
      {
        id: '2',
        content: 'Add NPS feedback to wallboard',
        description: 'Show NPS on dashboard',
        assignees: [
          { id: 'u3', name: 'Sam', avatar: 'https://i.pravatar.cc/150?img=3' },
        ],
      },
    ],
  },
  inProgress: {
    title: 'IN PROGRESS',
    items: [
      {
        id: '3',
        content: 'Force SSL on account info',
        description: 'Security enhancement',
        assignees: [
          { id: 'u4', name: 'Jane', avatar: 'https://i.pravatar.cc/150?img=4' },
        ],
      },
      {
        id: '4',
        content: 'Create subscription plans',
        description: 'Add plans and pricing',
        assignees: [],
      },
    ],
  },
  inReview: {
    title: 'IN REVIEW',
    items: [],
  },
  testing: {
    title: 'TESTING',
    items: [],
  },
  done: {
    title: 'DONE',
    items: [
      {
        id: '5',
        content: 'Install SSL certificate',
        description: 'Setup on production',
        assignees: [
          { id: 'u5', name: 'Ron', avatar: 'https://i.pravatar.cc/150?img=5' },
        ],
      },
    ],
  },
};

const TaskListComponent = () => {
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];
    const sourceItems = [...sourceCol.items];

    if (source.droppableId === destination.droppableId) {
      const [movedItem] = sourceItems.splice(source.index, 1);
      sourceItems.splice(destination.index, 0, movedItem);

      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceCol, items: sourceItems },
      });
    } else {
      const destItems = [...destCol.items];
      const [movedItem] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, movedItem);

      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceCol, items: sourceItems },
        [destination.droppableId]: { ...destCol, items: destItems },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4 py-4 overflow-x-auto scrollbar-hide">
        {Object.entries(columns).map(([columnId, column]) => (
          <div
            key={columnId}
            className="bg-gray-100 p-2 rounded w-80 min-w-[300px] min-h-screen"
          >
            <h2 className="font-bold mb-2">{column.title}</h2>
            <Droppable droppableId={columnId}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex flex-col gap-2 min-h-[100px]"
                >
                  {column.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white rounded shadow p-3 flex flex-col justify-between min-h-[120px]"
                        >
                          {/* Description */}
                          <div className="text-sm text-gray-500 mb-1">
                            {item.description}
                          </div>

                          {/* Main Content */}
                          <div className="font-semibold text-gray-800 mb-6">
                            {item.content}
                          </div>

                          {/* Avatars */}
                          <div className="flex justify-end mt-auto">
                            {item.assignees?.map((person) => (
                              <img
                                key={person.id}
                                src={person.avatar}
                                alt={person.name}
                                className="w-6 h-6 rounded-full border-2 border-white -ml-2 first:ml-0"
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskListComponent;
