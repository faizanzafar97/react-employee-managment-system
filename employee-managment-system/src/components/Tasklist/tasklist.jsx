

import React from 'react'
import AccepetTask from './AccepetTask'
import CompleteTask from './CompleteTask'
import Failedtask from './Failedtask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  return (
    <div className="w-full max-h-128 overflow-y-auto scrollbar-hide space-y-4">


    {data.tasks.map((elem, idx) => {
      if(elem.active){
        return <AccepetTask key={idx}  data={elem}/>
      }

      if(elem.newTask){
        return <NewTask key={idx} data={elem} />
      }

      if(elem.completed){
        return <CompleteTask key={idx} data={elem} />
      }

      if(elem.failed){
        return <Failedtask key={idx} data={elem} />
      }
      
    })}

    </div>
  )
}

export default TaskList