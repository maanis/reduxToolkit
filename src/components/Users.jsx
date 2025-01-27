import { useDispatch, useSelector } from 'react-redux'
import { handleDel } from '../assets/store/reducers/usersSlice'

const Users = () => {
    const { users } = useSelector(state => state.Users)
    console.log(users)
    const dispatch = useDispatch()
    return (
        <div className='bg-zinc-600 max-w-5xl mx-auto p-4'>
            <h2 className='text-3xl mb-4 underline underline-offset-8 font-semibold'>Users List :</h2>
            {users.map((user, index) => (
                <div key={index} className='flex gap-4'>
                    <h3>{user.name.firstname}</h3>
                    <p onClick={() => dispatch(handleDel(index))} className='text-red-600 cursor-pointer'>x</p>
                </div>
            ))}
        </div>
    )
}

export default Users