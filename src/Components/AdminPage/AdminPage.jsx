import React from 'react'
import './AdminPage.css'
import translations from '../../Language/translation.json'
import FileUpload from './FileUpload/FileUpload';
import LoadJsonButton from './LoadJsonButton/LoadJsonButton';
import { store } from '../../Store/bookStore'
import UsersTable from './Components/Users/Users';

/*FONT AWESOME ICONS*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward, faXmark } from '@fortawesome/free-solid-svg-icons';

const AdminPage = () => {

    const { language, changeLanguage } = store(state => state);

    return (
        <div className='Adminbackground'>
            <div class="square"> <h1>ADMINISTRATOR</h1></div>
            <div class="square"> <h2>Welcome Alberto</h2></div>
            <div class="square"> <h1><FontAwesomeIcon icon={faXmark}/></h1></div>

            <div className="square">Map JSON</div>
            <div className="square">Idioms JSON</div>
            <div className="square">Users</div>
            <div className="square">Make / Remove Admin</div>
            <div className="square">Edit User</div>
            <div className='squarePrincipal'>
                <UsersTable/>
            </div>

            


        </div>
    )
}

export default AdminPage