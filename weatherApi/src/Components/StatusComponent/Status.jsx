import { useDispatch, useSelector } from 'react-redux'
import "./Status.css"
import { updateUser } from '../../utils/userSlice';
import TemporaryDrawer from '../DrawerIcon/TemporaryDrawer';




const Status = () => {

    const users = useSelector(store => store.user.users);
    const dispatch = useDispatch()

    const user = users.find((user) => user.isMatched === true);

    const handleLogInUser = () => {
        dispatch(updateUser(user.name))
    }

    return (
        <div className='status'>

            <p >Welcome <span className='username'>{user.name.toUpperCase()}</span>...!</p>
            <TemporaryDrawer user={user}    handleLogInUser={handleLogInUser}  />

          


        </div>
    )
}

export default Status