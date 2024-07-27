const scorecardBody = document.getElementById('scorecard-body');

    fetch('data.json')
    .then(response => response.json())
    .then(data => loadScorecard(data))

    function loadScorecard(tasks) {
        tasks.forEach(task => {
            addRow(task.task, task.points);
        });
    }

    function addRow(task = '', points = '') {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="task-cell"><input type="text" name="task" value="${task}"></td>
            <td class="point-cell"><input class="points" type="number" name="points" value="${points}"></td>
            <td class="point-cell"><input class="points" type="number" name="points-earned"></td>
            <td class="no-print action-column"><button type="button" onclick="deleteRow(this)" class="delete-btn">&#x2715;</button></td>
        `;
        scorecardBody.appendChild(row);
    }

    function deleteRow(button) {
        const row = button.closest('tr');
        const choice = 'Are you sure you want to delete this row?'
        if(confirm(choice) == true){
          scorecardBody.removeChild(row);
        }
    }
    
    
    document.getElementById('scorecard-form').addEventListener
    ('submit', function(event) {
        event.preventDefault();
        
        if(doesCookieExist()){
            popup();
            // window.print();
        } else{
            popup();
        }
    });

    window.onload = loadScorecard;