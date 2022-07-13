import React from "react"
import {v4 as uuidv4} from "uuid"
import DynamicForm from "./DynamicForm"
import DynamicForm2 from "./DynamicForm2"

export default function App() {
  const [inviteMembers, setInviteMembers] = React.useState([
    {
      name: "",
      email: "",
      id: uuidv4(),
    }
  ])

  const addMemberRow = () => {
    // duplicate existing array
    let _inviteMembers = [...inviteMembers]
    // add new object
    _inviteMembers.push({
      name: "",
      email: "",
      id: uuidv4()
    })
    // set state
    setInviteMembers(_inviteMembers)
  }

  const removeMemberRow = (id) => {
    // duplicate existing array
    let _inviteMembers = [...inviteMembers]
    // add new object
    _inviteMembers = _inviteMembers.filter(member=>member.id!==id)
    // set state
    setInviteMembers(_inviteMembers)
  }

  const handleMemberChange=(id, event)=>{
    // find index to be changed
    const index=inviteMembers.findIndex(m=>m.id===id)
    let _inviteMembers = [...inviteMembers] 
    _inviteMembers[index][event.target.name] = event.target.value
    // set state
    setInviteMembers(_inviteMembers)
  }  

  return (
    <React.Fragment>
      <div>
        {inviteMembers.map((member) => (
          <React.Fragment>
            <div key={member.id}>
              <div>
                <label>Name</label>
                <input name="name" type="text" onChange={(e)=>handleMemberChange(member.id, e)} />
              </div>
              <div>
                <label>Email</label>
                <input name="email" type="text" onChange={(e)=>handleMemberChange(member.id, e)}/>
              </div>
              <button onClick={addMemberRow}>Add New</button>
              {inviteMembers.length>1 && (
                <button onClick={()=>removeMemberRow(member.id)}>Remove Entry</button>
              )}
            </div>

          </React.Fragment>
        ))}
      </div>

      <h1>Dynamic form clone</h1>
      <DynamicForm/>

      <h1>Dynamid form clone 2</h1>
      <DynamicForm2/>
    </React.Fragment>
  );
}
