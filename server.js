const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];
let taskIdCounter = 1;

function validateTask(data) {
  if (!data.title || typeof data.title !== 'string' || data.title.trim() === '') {
    return { valid: false, error: 'Title is required and must be a non-empty string' };
  }
  return { valid: true };
}

function findTaskById(id) {
  return tasks.find(task => task.id === parseInt(id));
}

// POST /tasks - Create a new task
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;

  const validation = validateTask({ title });
  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }

  const newTask = {
    id: taskIdCounter++,
    title: title.trim(),
    description: description || '',
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// GET /tasks - Get all tasks
app.get('/tasks', (req, res) => {
  const { status, sort } = req.query;

  let filteredTasks = [...tasks];

  if (status) {
    if (status !== 'pending' && status !== 'done') {
      return res.status(400).json({ error: 'Status must be "pending" or "done"' });
    }
    filteredTasks = filteredTasks.filter(task => task.status === status);
  }

  if (sort === 'createdAt') {
    filteredTasks.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }

  res.status(200).json(filteredTasks);
});

// GET /tasks/:id - Get single task
app.get('/tasks/:id', (req, res) => {
  const task = findTaskById(req.params.id);

  if (!task) {
    return res.status(404).json({ error: `Task with ID ${req.params.id} not found` });
  }

  res.status(200).json(task);
});

// PUT /tasks/:id - Update a task
app.put('/tasks/:id', (req, res) => {
  const task = findTaskById(req.params.id);

  if (!task) {
    return res.status(404).json({ error: `Task with ID ${req.params.id} not found` });
  }

  const { title, description } = req.body;

  if (title !== undefined) {
    const validation = validateTask({ title });
    if (!validation.valid) {
      return res.status(400).json({ error: validation.error });
    }
    task.title = title.trim();
  }

  if (description !== undefined) {
    task.description = description;
  }

  res.status(200).json(task);
});

// PATCH /tasks/:id/done - Mark task as done
app.patch('/tasks/:id/done', (req, res) => {
  const task = findTaskById(req.params.id);

  if (!task) {
    return res.status(404).json({ error: `Task with ID ${req.params.id} not found` });
  }

  task.status = 'done';
  res.status(200).json(task);
});

// DELETE /tasks/:id - Delete a task
app.delete('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(task => task.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: `Task with ID ${req.params.id} not found` });
  }

  const deletedTask = tasks.splice(index, 1);
  res.status(200).json({ message: 'Task deleted successfully', task: deletedTask[0] });
});

// Handle unsupported methods
app.use((req, res) => {
  res.status(405).json({ error: 'Method Not Allowed' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Task Manager API running on http://localhost:${PORT}`);
});