import React, { useState } from 'react';

const TaskCard = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(task._id, editedTask);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value,
    });
  };

  return (
    <div className={`task-card priority-${task.priority}`}>
      {isEditing ? (
        <div className="task-edit-form">
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            className="task-input"
          />
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
            className="task-textarea"
            rows="2"
          />
          <select
            name="status"
            value={editedTask.status}
            onChange={handleChange}
            className="task-select"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <div className="task-actions">
            <button className="btn-save" onClick={handleSave}>
              Save
            </button>
            <button className="btn-cancel" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="task-header">
            <h3 className="task-title">{task.title}</h3>
            <span className={`task-status ${task.status}`}>{task.status}</span>
          </div>
          <p className="task-description">{task.description}</p>
          <div className="task-meta">
            <span className="task-priority">Priority: {task.priority}</span>
            {task.dueDate && (
              <span className="task-duedate">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </span>
            )}
          </div>
          <div className="task-actions">
            <button className="btn-edit" onClick={handleEdit}>
              Edit
            </button>
            <button
              className="btn-delete"
              onClick={() => onDelete(task._id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;
