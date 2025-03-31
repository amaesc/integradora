import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { store } from '../../../../Store/bookStore'

const LanguageComponent = () => {
    const { language, setLanguage } = store(state => state);
    return (
        <div>
            <div className='fontAwesomeIcon'><FontAwesomeIcon icon={faLanguage} /></div>
            <div className='languageSelection'>
                <div className='language'>
                    <h2 onClick={() => setLanguage('es')}>ES</h2>
                    <div className={language.lang === "es" ? "selectedIdiom" : "None"}></div>
                </div>
                <div className='language'>
                    <h2 onClick={() => setLanguage('en')}>EN</h2>
                    <div className={language.lang === "en" ? "selectedIdiom" : "None"}></div>
                </div>
                <div className='language'>
                    <h2 onClick={() => setLanguage('fr')}>FR</h2>
                    <div className={language.lang === "fr" ? "selectedIdiom" : "None"}></div>
                </div>
            </div>
        </div>
    )
};

export default LanguageComponent;