import { 
    faLock, faUser, faSliders, faLaptopMedical, faCalendarDays, faDisease, faFaceThermometer, faClipboardListCheck
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icons = {
    Lock: <FontAwesomeIcon icon={faLock} />,
    Dashboard: <FontAwesomeIcon icon={faLaptopMedical} />,
    Calendar: <FontAwesomeIcon icon={faCalendarDays} />,
    Disease: <FontAwesomeIcon icon={faDisease} />,
    Symptoms: <FontAwesomeIcon icon={faFaceThermometer} />,
    Occurence: <FontAwesomeIcon icon={faClipboardListCheck} />,
    Settings: <FontAwesomeIcon icon={faSliders} />,
    User: <FontAwesomeIcon icon={faUser} />
}

export default Icons