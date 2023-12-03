import { ACTIONS } from '../../calculator/Calculator';
import styles from './DigitButton.module.css';

const DigitButton = ({ dispatch, digit }) => {
    return (
        <button
            className={styles.digitButton}
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
        >
            {digit}
        </button>
    );
};

export default DigitButton;
