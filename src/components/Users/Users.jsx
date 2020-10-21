import React from 'react'
import style from './user.module.css'

let Users = (props) =>{
    if(props.users.length === 0){
        props.setUsers([
            {id:'1', photoUrl:'https://byuc.files.wordpress.com/2012/07/avat-2.jpg', followed:'false', fullName:'Nikita', status:'whats up?', location:{city:'Yaroslavl',country:'Russia'}},
            {id:'2', photoUrl:'https://byuc.files.wordpress.com/2012/07/avat-2.jpg', followed:'true', fullName:'Max', status:'hello there:)', location:{city:'Moscow',country:'Russia'}},
            {id:'3', photoUrl:'https://byuc.files.wordpress.com/2012/07/avat-2.jpg', followed:'false', fullName:'Nikita', status:'it is working?', location:{city:'Yaroslavl',country:'Russia'}},
            {id:'4', photoUrl:'https://byuc.files.wordpress.com/2012/07/avat-2.jpg', followed:'true', fullName:'Ildar', status:'definitely yes!?', location:{city:'Yaroslavl',country:'Russia'}}
            ]
        )
    }

    return <div>
        {
          props.users.map (u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={style.userPhoto}/>
                </div>
                <div>
                    {u.followed 
                    ? <button onClick={() =>{props.unfollow(u.id)}}>Unfollow</button>
                    : <button onClick={() =>{props.follow(u.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName} </div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>

         </div>)   
        }
    </div>
}

export default Users;