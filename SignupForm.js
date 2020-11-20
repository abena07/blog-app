import React from 'react'

function SignupForm() {
    return (
        <div>
            <form>
            <label>First Name:</label>
            <input type ="name" name="first name"/>

            <label>Last Name</label>
            <input type ="name" name="last name"/>

            <label>Email:</label>
            <input type ="email" name="email"/>

            <label>Password</label>
            <input type ="password"  name="pswd"/>

            <label>Confirm Password</label>
            <input type ="password"  name="pswd"/>

            
            <input type ="submit" value="Sign Up"/>
            </form>
        </div>
    )
}

export default SignupForm
