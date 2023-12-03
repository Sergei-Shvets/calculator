import { ACTIONS } from '../../calculator/Calculator';
import styles from './OperationButton.module.css';

const OperationButton = ({ dispatch, operation }) => {
    return (
        <button
            className={styles.operBtn}
            onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
        >
            {operation}
        </button>
    );
};

export default OperationButton;
