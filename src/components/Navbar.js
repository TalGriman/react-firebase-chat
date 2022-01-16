import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { AuthContext } from '../context/auth';

const Navbar = (props) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSingout = async () => {
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
            isOnline: false
        });
        await signOut(auth);
        navigate("/login")
    };

    return (
        <nav>
            <h3><Link to='/'>Messenger</Link></h3>
            <div>
                {user ?
                    <>
                        <Link to='/profile'>Profile</Link>
                        <button className='btn' onClick={handleSingout}>Logout</button>
                    </>
                    :
                    <>
                        <Link to='/register'>Register</Link>
                        <Link to='/login'>Login</Link>
                    </>
                }
            </div>
        </nav>
    );
};

export default Navbar;