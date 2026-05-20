import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Dashboard.js";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [editingTask, setEditingTask] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [showStats, setShowStats] = useState(true);

  const token = localStorage.getItem("token");

  // Redirect if no token
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  // Fetch all tasks
  const fetchTasks = useCallback(async () => {
    if (!token) return;
    
    try {
      setFetching(true);
      const { data } = await API.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(data);
    } catch (error) {
      console.error("Fetch tasks error:", error);
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/");
      }
    } finally {
      setFetching(false);
    }
  }, [token, navigate]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // Create new task
  const createTask = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("⚠️ Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await API.post(
        "/tasks",
        {
          title: title.trim(),
          description: description.trim(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setDescription("");
      await fetchTasks();
      showNotification("✅ Task created successfully!", "success");
    } catch (error) {
      console.error("Create task error:", error);
      showNotification("❌ Failed to create task", "error");
    } finally {
      setLoading(false);
    }
  };

  // Update task
  const updateTask = async (id) => {
    if (!editTitle.trim() || !editDescription.trim()) {
      alert("⚠️ Please fill all fields");
      return;
    }

    try {
      await API.put(
        `/tasks/${id}`,
        {
          title: editTitle.trim(),
          description: editDescription.trim(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEditingTask(null);
      await fetchTasks();
      showNotification("✅ Task updated successfully!", "success");
    } catch (error) {
      console.error("Update task error:", error);
      showNotification("❌ Failed to update task", "error");
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    if (!window.confirm("🗑️ Are you sure you want to delete this task?")) return;

    try {
      await API.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await fetchTasks();
      showNotification("✅ Task deleted successfully!", "success");
    } catch (error) {
      console.error("Delete task error:", error);
      showNotification("❌ Failed to delete task", "error");
    }
  };

  // Toggle task status
  const toggleStatus = async (task) => {
    const newStatus = task.status === "completed" ? "pending" : "completed";
    try {
      await API.put(
        `/tasks/${task._id}`,
        { ...task, status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await fetchTasks();
      showNotification(`✅ Task marked as ${newStatus}!`, "success");
    } catch (error) {
      console.error("Status update error:", error);
      showNotification("❌ Failed to update status", "error");
    }
  };

  // Logout handler
  const logoutHandler = () => {
    if (window.confirm("🚪 Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  // Show notification (temporary)
  const showNotification = (message, type) => {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  // Filter and search tasks
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || task.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  // Calculate statistics
  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === "completed").length,
    pending: tasks.filter(t => t.status === "pending").length,
    progress: tasks.filter(t => t.status === "in-progress").length,
  };

  // Loading skeleton
  if (fetching) {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="skeleton-header"></div>
          <div className="skeleton-stats">
            <div className="skeleton-stat"></div>
            <div className="skeleton-stat"></div>
            <div className="skeleton-stat"></div>
            <div className="skeleton-stat"></div>
          </div>
          <div className="skeleton-grid">
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="container">
        
        {/* Header Section */}
        <div className="header">
          <div className="header-left">
            <div className="logo">
              <span className="logo-icon">✅</span>
              <h1>TaskFlow</h1>
            </div>
            <p className="tagline">Organize your day, achieve more! 🚀</p>
          </div>
          <div className="header-right">
            <div className="user-info">
              <span className="user-icon">👤</span>
              <span className="user-name">Welcome back!</span>
            </div>
            <button className="logout-btn" onClick={logoutHandler}>
              <span>🚪</span> Logout
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        {showStats && (
          <div className="stats-grid">
            <div className="stat-card total">
              <div className="stat-icon">📊</div>
              <div className="stat-info">
                <h3>{stats.total}</h3>
                <p>Total Tasks</p>
              </div>
            </div>
            <div className="stat-card completed">
              <div className="stat-icon">✅</div>
              <div className="stat-info">
                <h3>{stats.completed}</h3>
                <p>Completed</p>
              </div>
            </div>
            <div className="stat-card pending">
              <div className="stat-icon">⏳</div>
              <div className="stat-info">
                <h3>{stats.pending}</h3>
                <p>Pending</p>
              </div>
            </div>
            <div className="stat-card progress">
              <div className="stat-icon">🔄</div>
              <div className="stat-info">
                <h3>{stats.progress}</h3>
                <p>In Progress</p>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filter Bar */}
        <div className="search-filter-bar">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-buttons">
            <button className={`filter-btn ${filterStatus === "all" ? "active" : ""}`} onClick={() => setFilterStatus("all")}>
              All
            </button>
            <button className={`filter-btn ${filterStatus === "pending" ? "active" : ""}`} onClick={() => setFilterStatus("pending")}>
              Pending
            </button>
            <button className={`filter-btn ${filterStatus === "completed" ? "active" : ""}`} onClick={() => setFilterStatus("completed")}>
              Completed
            </button>
          </div>
        </div>

        {/* Create Task Form */}
        <div className="create-task-card">
          <h2 className="form-title">✨ Create New Task</h2>
          <form onSubmit={createTask}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Task title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={loading}
                className="task-input"
              />
            </div>
            <div className="input-group">
              <textarea
                placeholder="Task description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="3"
                disabled={loading}
                className="task-textarea"
              ></textarea>
            </div>
            <button type="submit" disabled={loading} className="create-btn">
              {loading ? "⏳ Creating..." : "+ Create New Task"}
            </button>
          </form>
        </div>

        {/* Tasks Grid */}
        <div className="tasks-section">
          <div className="section-header">
            <h2>📋 Your Tasks</h2>
            <span className="task-count-badge">{filteredTasks.length} tasks</span>
          </div>

          <div className="task-grid">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <div className={`task-card ${task.status === "completed" ? "completed-task" : ""}`} key={task._id}>
                  {editingTask === task._id ? (
                    // Edit Mode
                    <div className="edit-mode">
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="edit-input"
                        placeholder="Task title"
                      />
                      <textarea
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        className="edit-textarea"
                        placeholder="Task description"
                        rows="3"
                      ></textarea>
                      <div className="edit-actions">
                        <button className="save-btn" onClick={() => updateTask(task._id)}>💾 Save</button>
                        <button className="cancel-btn" onClick={() => setEditingTask(null)}>❌ Cancel</button>
                      </div>
                    </div>
                  ) : (
                    // View Mode
                    <>
                      <div className="task-card-header">
                        <div className="task-title-section">
                          <input
                            type="checkbox"
                            checked={task.status === "completed"}
                            onChange={() => toggleStatus(task)}
                            className="task-checkbox"
                          />
                          <h3 className={task.status === "completed" ? "completed-text" : ""}>
                            {task.title}
                          </h3>
                        </div>
                        <span className={`status-badge ${task.status === "completed" ? "badge-completed" : task.status === "in-progress" ? "badge-progress" : "badge-pending"}`}>
                          {task.status === "completed" ? "✓ Completed" : task.status === "in-progress" ? "🔄 In Progress" : "⏳ Pending"}
                        </span>
                      </div>
                      <p className="task-description">{task.description}</p>
                      <div className="task-footer">
                        <div className="task-date">
                          <span>📅 {new Date(task.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div className="task-actions">
                          <button className="edit-btn" onClick={() => {
                            setEditingTask(task._id);
                            setEditTitle(task.title);
                            setEditDescription(task.description);
                          }}>
                            ✏️ Edit
                          </button>
                          <button className="delete-btn" onClick={() => deleteTask(task._id)}>
                            🗑️ Delete
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))
            ) : (
              <div className="empty-state">
                <div className="empty-animation">📭</div>
                <h3>No tasks found</h3>
                <p>{searchTerm ? "Try a different search term" : "Create your first task to get started!"}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;