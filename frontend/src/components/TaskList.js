import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  if (tasks.length === 0) {
    return <div className="empty-state">No tasks yet. Create one to get started!</div>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TaskList;
