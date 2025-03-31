import "./Popup.css";
import { store } from '../../../../../Store/bookStore';

const PopupComponent = () => {
    const { icon } = store(state => state);

    return (
        icon.activeIcon !== "N/A" && (  // Correct conditional rendering
            <div className="iconPopup">
                <div className="popupText">
                    <h1><strong>{icon.activeIcon}</strong></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, harum. Nemo magnam repudiandae quam minima sit mollitia impedit tenetur nam voluptas molestias assumenda, excepturi nobis sequi, cumque asperiores molestiae hic.</p>
                </div>
                <img src="/pageImages/utch.jpg" alt="N/A" />
            </div>
        )
    );
};

export default PopupComponent;
