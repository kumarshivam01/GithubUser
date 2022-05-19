import React from 'react'
import { Card, Button } from 'react-bootstrap'
function GithubCard({ avatar_url, login }) {

    return (
        <div>
            <Card style={{ width: '15rem', display:'flex', gap:'8%', margin:'2% auto', }}>
                <Card.Img variant="top" style={{width:"100px", borderRadius:'50%'}} src={avatar_url} alt={login} />
                    <h2 style={{marginTop:"16%"}}>{login}</h2>
            </Card>
        </div>

    )
}

export default GithubCard