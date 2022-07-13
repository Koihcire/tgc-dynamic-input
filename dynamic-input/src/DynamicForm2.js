import React from "react"

export default class DynamicForm2 extends React.Component {
    state = {
        tags : [
            {tag: ""}
        ],
        tagsArray : [] 

    }

    addTag = () => {
        let _tags = [...this.state.tags]
        _tags.push({
            tag: ""
        })
        this.setState({
            tags: _tags
        })

         // set inviteMembersArray
         let _tagsArray = [];
         for (let m of this.state.tags){
             _tagsArray.push(m.tag)
         }
         this.setState({
             tagsArray: _tagsArray
         })
    }

    removeTag = (index) => {
        let _tags = [...this.state.tags]
        // _tags = _tags.filter(tag=> tag === tag[index])
        _tags.splice(index,1)
        this.setState({
            tags: _tags
        })

         // set inviteMembersArray
         let _tagsArray = [];
         for (let m of this.state.tags){
             _tagsArray.push(m.tag)
         }
         this.setState({
             tagsArray: _tagsArray
         })
    }

    inputChange = (index, e) => {
        let _tags = [...this.state.tags]
        _tags[index][e.target.name] = e.target.value
        this.setState({
            tags: _tags
        })

         // set inviteMembersArray
         let _tagsArray = [];
         for (let m of this.state.tags){
             _tagsArray.push(m.tag)
         }
         this.setState({
             tagsArray: _tagsArray
         })
    }

    render(){
        return(
            <React.Fragment>
                {this.state.tags.map((element, index)=>(
                    <React.Fragment>
                        <div key={index}>
                            <label>Tags</label>
                            <input name="tag" type="text" value={element.tag} onChange={(e)=>this.inputChange(index , e)}/>
                        </div>
                        <button onClick={this.addTag}>Add New</button>
                        <button onClick={()=>this.removeTag(index)}>Remove</button>
                    </React.Fragment>
                ))}
            </React.Fragment>
        )
    }
}