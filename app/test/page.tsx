"use client";

import { useState } from "react";

type Task = {
    id: string;
    name: string;
    check: boolean;
    create_date: Date;
}


export default function TaskPage() {
    const [tasks, setTasks] = useState<Task[]>([]);


    function changeStatus(id:string){
        setTasks((previousTasks) => previousTasks.map((task) => {
            if (task.id !== id) return task
            task.check = true
            return task
        }))
    }

    //как удалять
    function deleteTask(id: string) {
       setTasks((prev) => prev.filter((task) => task.id != id)) 
    }

    


    

    

    return (
        <div className="container mx-auto flex flex-col gap-4">
            <CreateTask
                onCreate={(task) => {
                    setTasks([...tasks, task])
                }}
            />

            <div className="flex flex-col gap-4 border-b pb-4">
                {tasks.map((task) => (
                    <CardTask
                        task={
                            task
                        }
                        onChangeStatus={changeStatus}
                        deleteCard={deleteTask}



                    />
                ))}
            </div>
        </div>




    )

}

function CreateTask({ onCreate }: { onCreate: (task: Task) => void }) {
    const [name, setName] = useState('')
    return (
        <div className="container mx-auto flex justify-center">
            <div className="flex flex-col gap-4">
                <input className="bg-stone-200 px-3 py-2 rounded-lg w-40"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Новая задача"
                />
                <button className="bg-stone-200 h-40 w-40"
                    onClick={() => {
                        if (!name) {
                            alert('Ошибка')
                            return
                        }



                        onCreate({
                            id: crypto.randomUUID(),
                            name,
                            check: false,
                            create_date: new Date()
                        })

                        alert('Ты мужик')
                    }}
                >
                    Создать
                </button>
            </div>
        </div>
    )



}

function CardTask({ task, onChangeStatus, deleteCard }: 
    { task: Task, 
        onChangeStatus: (id: string) => void, 
        //тип того какая функцитя это
        deleteCard: (id:string) =>void }) 
        {
    return (
        <div className="flex gap-4 flex-col">
            <div className="rounded-md p-4 bg-stone-200 flex flex-col gap-2 ">
                <p>id = {task.id}</p>
                <p>имя = {task.name}</p>
                <p>выполенеие = {task.check ? "Yes" : "No"}</p>
                <p>имя = {task.name}</p>
            </div>
            <div>
                <button className="bg-stone-200 w-fit p-4"
                   onClick={()=>{
                        onChangeStatus(task.id)
                   }

                   } 
                >Выполнено</button>
                <button className="bg-stone-200 w-fit p-4" onClick={() => {
                    //че сделать при клике
                    deleteCard(task.id)
                }} >
                    Удалить
                </button>

        

            </div>
        </div>

    )
}

