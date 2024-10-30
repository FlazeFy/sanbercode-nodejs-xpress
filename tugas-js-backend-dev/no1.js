export const showTask = (task) => {
    let subtask = ''
    task.task_subtask.length > 0 &&
        task.task_subtask.forEach((dt,idx) => {
            subtask += `${idx+1}. ${dt}\n`
        });
    const res = `ID : ${task.id}\nTitle : ${task.task_name}\nDescription : ${task.task_description}\nStatus : ${task.task_is_important ? 'This is a priority task' : 'Normal task'}\nSub Task :\n${subtask}`

    return res
}