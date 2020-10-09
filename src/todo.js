import React,{Component,Fragment} from "react";
import { ImCross } from "react-icons/im";
class Todo extends Component{
    constructor(props){
        super(props);
        this.state={
            filterlist:[],
            taskList:[],
            completed:[],
            addItem:{
                newItem:"",
                key:""
            }
        }
    }

   inputHandler=(event)=>{
       this.setState({
           addItem:{
               newItem:event.target.value,
               key: Date.now()
           }
       })
   }


   addHandler=(event)=>{
       event.preventDefault();
       if(this.state.addItem.newItem!==""){
            const item=this.state.addItem;
            const newTask=[item,...this.state.taskList]
            this.setState({
                  taskList:newTask,
                  addItem:{
                      newItem:"",
                      key:""
                  }
            })
       }
     
   }


  doneHandler(deleteItem){
           
    var newCompleteList;

       const uncompletedTask=this.state.taskList.filter(element=>{
           if (element.key===deleteItem){
                newCompleteList=[element,...this.state.completed]
           }

           else{
               return element;
           }
    //    this.setState({
    //        completed: newCompleteList,
    //        taskList:uncompletedTask
    //    })
       })

       this.setState({
        completed: newCompleteList,
        taskList:uncompletedTask
    })

     
  }




    render(){
         
        const newTaskList=this.state.taskList.map(element=>{
            return(
                <div className="task">
                        
                        <p key={element.key}>{element.newItem}
                        <ImCross style={{"display":"inline"}} onClick={()=>this.doneHandler(element.key)}/>
                
                </p>
                
                </div>
              
            )
        })

       
        const newlist=this.state.completed.map(element=>{
            return(
                <div className="completetask">
                    <p key={element.key}>{element.newItem}
                
                </p>
                </div>
            )
        })

        
      



        return(
            <Fragment>
               <p className="title">TO DO APP</p>
            <form onSubmit={this.addHandler}>
            
                <input type="text" value={this.state.addItem.newItem} onChange={this.inputHandler} style={{"height":"23px","width":"300px"}} 
                placeholder="add task"
                >

                </input>
                <button type="submit" style={{"width":"70px","height":"35px","margin":"7px"}}>ADD</button>
            </form>
              
              <h1 style={{"margin-left":"7px"}}>Tasks</h1>
              <h1 style={{"float":"right","margin-right":"7px"}}>Done</h1>
             
            <div>{newTaskList}</div>
            
            <div>{newlist}</div>
            </Fragment>
        )
    }


}
export default Todo;