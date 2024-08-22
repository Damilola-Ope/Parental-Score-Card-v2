const scorecardBody = document.getElementById('scorecard-body');

// Load existing tasks from localStorage on page load
window.onload = () => {
    const savedTasks = JSON.parse(localStorage.getItem('scorecardTasks')) || [];
    
    //load task from localStorage if they exist
    if (savedTasks.length > 0) {
        loadScorecard(savedTasks);
    } else {
        // Only fetch tasks from data.json if localStorage is empty
        fetch('data.json')
            .then(response => response.json())
            .then(data => loadScorecard(data));
    }
};

function loadScorecard(tasks) {
    scorecardBody.innerHTML ='';
    tasks.forEach(task => {
        addRow(task.task, task.points, task.earnedPoints);
    });
}

//function to add tasks
function addRow(task = '', points = '', earnedPoints = '') {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td class="task-cell"><input type="text" name="task" value="${task}"></td>
        <td class="point-cell"><input class="points" type="number" name="points" value="${points}"></td>
        <td class="point-cell"><input class="points" type="number" name="points-earned" value="${earnedPoints}"></td>
        <td class="no-print action-column"><button type="button" onclick="deleteRow(this)" class="delete-btn"><span class="material-icons">delete_outline</span></button></td>
    `;
    scorecardBody.appendChild(row);
}

// function to delete
function deleteRow(button) {
    const row = button.closest('tr');
    output.style.display = 'flex';
    let popup = document.createElement('div');
    popup.innerHTML= `
    <div class= form-container>
        <p class="popup-subtitle">Are you sure you want <br> to delete this row?</p>
        <div>
        <div class="delete-row-btn-container">
        <button class="cancel-button">Yes</button>
        <button class="cancel-button">No</button>
        </div>
        </div>
    <div>
    `;
    output.appendChild(popup);
    // uploadData()

    //fucntion to cancel the popup
    let cancel = document.getElementsByClassName('cancel-button');

    //if yes is clicked
    cancel[0].addEventListener('click', ()=>{
        //..delete row function
        output.style.display = 'none';
        scorecardBody.removeChild(row);
        saveTasksToLocalStorage();
        popup.innerHTML = ''
    })

    //if no is clicked
    cancel[1].addEventListener('click', ()=>{
        output.style.display = 'none';
        popup.innerHTML = ''
    })
}

// Save tasks to localStorage
function saveTasksToLocalStorage() {
    const tasks = Array.from(scorecardBody.children).map(row => {
        const taskInput = row.querySelector('input[name="task"]');
        const pointsInput = row.querySelector('input[name="points"]');
        const pointsEarnedInput = row.querySelector('input[name="points-earned"]');
        return {
            task: taskInput.value,
            points: pointsInput.value,
            pointsEarned: pointsEarnedInput.value
        };
    });
    localStorage.setItem('scorecardTasks', JSON.stringify(tasks));
}



//handle submit event
document.getElementById('scorecard-form').addEventListener
('submit', function(event) {
    event.preventDefault();
    saveTasksToLocalStorage()

    if(doesCookieExist()){
        window.print();
    } else{
        popup();
    }
});
