import Modal from "@mui/material/Modal";
import { AttackModalProps } from "@presentation/protocols";
import { getColor, TypeColors } from "@presentation/utils";
import { useState } from "react";
import "./styles.scss";

const AttackModal: React.FC<AttackModalProps> = (props) => {
  const { attack } = props;
  console.log(attack);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getBackground = (type: string) => {
    const color = TypeColors[type as keyof typeof TypeColors];
    const background = `${color}`;

    return background;
  };

  return (
    <div>
      <button className="cardDetails__pill" onClick={handleOpen}>
        {attack.name}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="attackModal">
          <div className="attackModal__cost">
            <strong>Cost:</strong>
            {attack.cost.map((cost) => {
              return (
                <p
                  className="attackModal__cost--pill"
                  style={{
                    background: getBackground(cost),
                    color: getColor([cost]),
                  }}
                >
                  {cost || "No cost"}
                </p>
              );
            })}
          </div>

          <p>
            <strong>Attack</strong>: {attack.name}
          </p>
          <p>
            <strong>Damage</strong>: {attack.damage || "No damage"}
          </p>
          <p>
            <strong>Description</strong>: {attack.text || "No description"}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default AttackModal;
