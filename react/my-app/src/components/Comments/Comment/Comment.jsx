import {useNavigate} from "react-router-dom";

export const Comment = ({comment}) => {
    const {postId,id,name,email,body}=comment
    const navigate = useNavigate()
    return (
        <div>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={()=>navigate(`posts/${postId}`)}>GetPost</button>
            <div>__________________________________________</div>
        </div>
    );
};