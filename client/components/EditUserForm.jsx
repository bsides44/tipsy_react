import React from 'react'

class EditUserForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname:'',
            tagline:'',
            language:[],
            email:'',
            profilepic:''
        }
    }
}
   
export default EditUserForm