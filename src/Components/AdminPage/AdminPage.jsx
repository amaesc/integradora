import React from 'react'
import './AdminPage.css'
import Translations from '../../Language/translation.json'
import MapComponent from '../Map/Components/Map/Map'
import AuditoryDisplay from './Auditory/Auditory'
import FileUpload from './FileUpload/FileUpload';
import LoadJsonButton from './LoadJsonButton/LoadJsonButton';
import TranslationsDisplay from './TranslationsDisplay/TranslationsDisplay';
import CoorsDisplay from './CoorsDisplay/CoorsDisplay';
import { store } from '../../Store/bookStore'
import UsersTable from './Components/Users/Users';
import { useNavigate } from 'react-router-dom';


/*FONT AWESOME ICONS*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward, faXmark } from '@fortawesome/free-solid-svg-icons';

const AdminPage = () => {
    const navigate = useNavigate();
    const { language, changeLanguage } = store(state => state);

    return (
        <div className='Adminbackground'>
            <div class="square"> <h1>ADMINISTRATOR</h1></div>
            <div class="square"> <h2>Welcome Alberto</h2></div>
            <div class="square" onClick={() => navigate("/masterPage")}> <h1><FontAwesomeIcon icon={faXmark}/></h1></div>

            <div className="square">Map JSON</div>
            <div className="square">Idioms JSON</div>
            <div className="square">Users</div>
            <div className="square">Make / Remove Admin</div>
            <div className="square">Edit User</div>
            <div className='squarePrincipal'>
                <div style={{ display: "flex", flexDirection: "row"}}>
                    <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", maxWidth: "30%"}}>
                        <TranslationsDisplay/>
                        <FileUpload/>
                        <LoadJsonButton/>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center"}}>
                        <CoorsDisplay/>
                        <FileUpload/>
                        <LoadJsonButton/>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", maxWidth: "30%"}}>
                        <AuditoryDisplay/>
                        <LoadJsonButton/>
                    </div>
                </div>
                <UsersTable/>
            </div>

            


        </div>
    )
}

export default AdminPage