let tasks = JSON.parse(localStorage.getItem('reminder_tasks')) || [];

let modal = document.getElementById('task-modal');
let openModalBtn = document.getElementById('open-modal-btn');
let closeModalBtn = document.getElementById('close-modal-btn');
let saveTaskBtn = document.getElementById('save-task-btn');
let taskNameInput = document.getElementById('task-name');
let taskTimeInput = document.getElementById('task-time');
let taskDescInput = document.getElementById('task-desc');
let cardsContainer = document.getElementById('cards-container');
let filterContainer = document.getElementById('filter-container');

// Modal Logic
openModalBtn.addEventListener('click', () => modal.classList.remove('hidden'));
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    taskNameInput.value = '';
    taskTimeInput.value = '';
    taskDescInput.value = '';
});

// Render Tasks
function renderTasks(filter = 'all') {
    cardsContainer.innerHTML = '';
    
    const filteredTasks = tasks.filter(task => {
        if (filter === 'pending') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true; 
    });

    filteredTasks.forEach(task => {
        let formattedDate = 'No date set';
        if (task.time) {
            const dateObj = new Date(task.time);
            formattedDate = dateObj.toLocaleString('en-US', { 
                month: 'short', day: 'numeric', year: 'numeric', 
                hour: '2-digit', minute: '2-digit', hour12: false 
            });
        }

        const textStyle = task.completed ? 'text-decoration: line-through; opacity: 0.5;' : '';

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="task-info" style="${textStyle}">
                <h4>${task.name}</h4>
                <p>${formattedDate}</p>
            </div>
            <div class="card-buttons">
                <button class="complete-btn" onclick="toggleComplete(${task.id})" title="${task.completed ? 'Undo' : 'Complete'}">
                    ${task.completed ? '↩' : '✔'}
                </button>
                <button class="delete-btn" onclick="deleteTask(${task.id})" title="Delete">✖</button>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}

// Save New Task
saveTaskBtn.addEventListener('click', () => {
    const name = taskNameInput.value.trim();
    const time = taskTimeInput.value;
    const desc = taskDescInput.value.trim();

    if (name === '') return alert('Please enter a task name!');

    tasks.push({
        id: Date.now(),
        name,
        time,
        desc,
        completed: false
    });

    saveAndRender();
    closeModalBtn.click(); 
});

// Update & Render helper
function saveAndRender() {
    localStorage.setItem('reminder_tasks', JSON.stringify(tasks));
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    renderTasks(activeFilter);
}

// Complete and Delete Actions (Must be global to work with inline onclick attributes)
window.toggleComplete = function(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveAndRender();
    }
};

window.deleteTask = function(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveAndRender();
};

// Filter Logic
filterContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        renderTasks(e.target.dataset.filter);
    }
});

// Initial Load
renderTasks('all');