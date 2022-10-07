import './action-bar.css';
import { useActions } from '../../hooks/use-action';
import ActionButton from '../action-button/action-button';

interface ActionBarProps {
    id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
    const { moveCell, deleteCell } = useActions();

    return (
        <div className="action-bar">
            <ActionButton iconName="fas fa-arrow-up" onClick={() => moveCell(id, 'up')}/>
            <ActionButton iconName="fas fa-arrow-down" onClick={() => moveCell(id, 'down')}/>
            <ActionButton iconName="fas fa-times" onClick={() => deleteCell(id)}/>
        </div>
    );
};

export default ActionBar;