import React from 'react'
import Button from '../components/Button'

function Dashboard(props) {
  return (
    <div>
        {
            props.userData.isLogged ? (
                <div>
                    <h3>Welcome, {props.userData.name}</h3>

                    {
                        props.userData.role === "mentor" ? (
                            <div>
                                <Button name="Assignment Review" />
                                <Button name="Publish Assignment" />
                            </div>
                        ) : props.userData.role === "learner" ? (
                            <div>
                                <Button name="Submit Assignment" />
                                <Button name="Join Session" />
                            </div>
                        ) : (
                            <p>Access Denied</p>
                        )
                    }


                </div>
            ) : (
                <p>Please login to continue</p>
            )
        }
    </div>
  )
}

export default Dashboard