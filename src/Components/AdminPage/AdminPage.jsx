import React from 'react'
import './AdminPage.css'
import translations from '../../Language/translation.json'
import { useLanguage } from '../../Context/LanguageContext';

import FileUpload from './FileUpload/FileUpload';
import LoadJsonButton from './LoadJsonButton/LoadJsonButton';

/*FONT AWESOME ICONS*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

const AdminPage = () => {

    const { language, changeLanguage } = useLanguage();

    return (
        <div className='Adminbackground'>
            <div class="square"> <h1>{translations.Components.AdminPage.TitlePage[language]}</h1></div>
            <div class="square"> <h2>Welcome Alberto</h2></div>
            <div class="square"> <h1>{translations.Components.AdminPage.Exit[language]}</h1></div>

            

            <div class="square">
                <div className="json-box">
                    <pre>{JSON.stringify(translations, null, 2)}</pre>
                </div>
            </div>
            <div class="square"> <h2>{translations.Components.AdminPage.LastEdit[language]}</h2></div>
            <div className="square"> <FileUpload/> </div>
            <div class="square"> <LoadJsonButton/> </div>
        </div>
    )
}

export default AdminPage