import React from "react"
import { v4 as uuidv4 } from "uuid"

export default class DynamicForm extends React.Component {
    state = {
        inviteMembers: [
            {
                name: "",
                email: "",
                id: uuidv4()
            }
        ],
        inviteMembersArray: []
    }

    addMemberRow = () => {
        // duplicate existing array
        let _inviteMembers = [...this.state.inviteMembers];
        // add new object
        _inviteMembers.push({
            name: "",
            email: "",
            id: uuidv4()
        })
        // set state
        this.setState({
            inviteMembers: _inviteMembers
        })
        // set inviteMembersArray
        let _inviteMembersArray = [];
        for (let m of this.state.inviteMembers){
            _inviteMembersArray.push(m.name)
        }
        this.setState({
            inviteMembersArray: _inviteMembersArray
        })
    }

    removeMemberRow = (id) => {
        // duplicate existing array
        let _inviteMembers = [...this.state.inviteMembers];
        // filter current id
        _inviteMembers = _inviteMembers.filter(member=>member.id!==id)
        // set state
        this.setState({
            inviteMembers: _inviteMembers
        })
        // set inviteMembersArray
        let _inviteMembersArray = [];
        for (let m of this.state.inviteMembers){
            _inviteMembersArray.push(m.name)
        }
        this.setState({
            inviteMembersArray: _inviteMembersArray
        })
    }

    handleFormChange = (id, e) => {
        // find index to be changed
        let index = this.state.inviteMembers.findIndex(m => m.id === id)
        let _inviteMembers = [...this.state.inviteMembers]
        _inviteMembers[index][e.target.name] = e.target.value
        // set state
        this.setState({
            inviteMembers: _inviteMembers
        })
        // set inviteMembersArray
        let _inviteMembersArray = [];
        for (let m of this.state.inviteMembers){
            _inviteMembersArray.push(m.name)
        }
        this.setState({
            inviteMembersArray: _inviteMembersArray
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.inviteMembers.map((member) => (
                    <React.Fragment>
                        <div key={member.id}>
                            <div>
                                <label>Name</label>
                                <input name="name" type="text" value={member.name} onChange={(e)=>this.handleFormChange(member.id, e)}/>
                            </div>
                            <div>
                                <label>Email</label>
                                <input name="email" type="text" value={member.email} onChange={(e)=>this.handleFormChange(member.id, e)} />
                            </div>
                            <button onClick={this.addMemberRow}>Add New</button>
                            {this.state.inviteMembers.length>1 && (
                                <button onClick={()=>this.removeMemberRow(member.id)}>Remove Entry</button>
                            )}
                        </div>
                    </React.Fragment>
                ))}
            </React.Fragment>
        );
    }
}