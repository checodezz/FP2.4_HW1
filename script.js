const tasks = [

    { id: 1, task: "Task 1", status: "todo" },

    { id: 2, task: "Task 2", status: "completed" },

    { id: 3, task: "Task 3", status: "inProgress" },

    { id: 4, task: "Task 4", status: "todo" },

    { id: 5, task: "Task 5", status: "completed" }

];

const taskList = document.querySelector('#taskList');
const radioButtons = document.getElementsByName('type');

function generateList(selectedType) {

    const filteredList = selectedType === "all" ? tasks : tasks.filter(task => task.status === selectedType)

    const taskItem = filteredList.map(task => `
    <li>
    <strong>ID: </strong>${task.id}<br>
    <strong>Task: </strong>${task.task}<br>
    <strong>Status: </strong>${task.status}
    </li><hr>
    `)

    taskList.innerHTML = taskItem.join('');
}

generateList("all");

radioButtons.forEach(radioBtn => {
    radioBtn.addEventListener('change', function () {
        generateList(this.value)
    })
})