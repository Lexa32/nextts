"use client";

import { useState } from "react";

type Task = {
    id: string;
    name: string;
    check: boolean;
    create_date: Date;
}


export default function TaskPage(){
    const [tasks, setTasks] = useState<Task[]>([]);
    return(
        <div className="container mx-auto">
            <CreateTask 
            onCreate={(task) =>{
                setTasks([...tasks, task])
            }}   
        />
        <div className="flex flex-col gap-4 border-b pb-4">
            {tasks.map((task) => (
            <setTask key={task.id} task={task} />
        ))}
        </div>
        </div>
        
        

        
    )
    
}

function CreateTask({onCreate}: {onCreate: (task: Task) => void}){
    const [name, setName] = useState('')
    return (
        <div className="container mx-auto">
            <div className="flex flex-col gap-4">
                <input className="bg-stone-200 px-3 py-2 rounded-lg w-40"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                placeholder="Новая задача"
                />
            <button className="bg-stone-200 h-40 w-40"
                onClick={()=>{
                    if (!name){
                        alert('Ошибка')
                        return
                    }

                    onCreate ({
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

function setTask({task}: {task: Task}){
    return(
        <div className="rounded-md p-4 bg-stone-200">
            <p>{task.name}</p>
        </div>
    )
}

}


