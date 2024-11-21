import { useState } from "react";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "React öğren", completed: false },
    { id: 2, text: "Örnek proje yap", completed: true },
    { id: 3, text: "Sunum hazırla", completed: false },
  ]);

  const [newTask, setNewTask] = useState(""); // yeni görev metni
  const [filter, setFilter] = useState("all"); //filtreleme durumu

  // Görev ekleme fonksiyonu
  const addTask = () => {
    if (newTask.trim() === "") return; // Boş görev eklenmesin

    const newTaskObject = {
      id: tasks.length + 1, // Yeni görev için id
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, newTaskObject]); // Görev listesine ekleme
    setNewTask(""); // Input alanını temizle
  };

  // Görev silme fonksiyonu
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //bir görevin completed durumunu değiştirmek

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
      task.id === id ? {...task, completed: !task.completed } : task 
     )
    );
  };


  //filtreleme fonksiyonu

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "notCompleted") return !task.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>Görev Takip Uygulaması</h1>

      {/* Görev ekleme formu */}
      <div className="task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Yeni görev ekle"
        />
        <button onClick={addTask}>Ekle</button>
      </div>

      {/*Filtreleme seçenekleri */}

      <div className="filters">
        <button onClick={() => setFilter("all")}>Tüm Görevler</button>
        <button onClick={() => setFilter("completed")}>Tamamlananlar</button>
        <button onClick={() => setFilter("notCompleted")}>Tamamlanmayanlar</button>
      </div>

      {/* Görev Listesi */}
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => toggleComplete(task.id)}>Tamamla</button>
            <button onClick={() => deleteTask(task.id)}>Sil</button>
          </li>
        ))}
      </ul>


    </div>
  );
}



export default App;
