import { DeleteCellAction, MoveCellAction } from "../../state/actions";

interface ActionButtonProps {
    iconName: string;
    onClick: () => MoveCellAction | DeleteCellAction;
}

const ActionButton: React.FC<ActionButtonProps> = ({ iconName, onClick}) => {
    return (
        <button className="button is-primary is-small" onClick={onClick}>
            <span className="icon">
                <i className={iconName}></i>
            </span>
        </button>
    );
};

export default ActionButton;