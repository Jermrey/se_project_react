import "./ItemModal.css";
import close from "../../assets/closeBtn.svg";

function ItemModal({
  activeModal,
  card,
  closeActiveModal,
  handleOverlay,
  handleDeleteCard,
}) {
  const deleteCardClick = () => {
    handleDeleteCard(card._id);
  };

  return (
    <div
      onClick={handleOverlay}
      className={`modal ${activeModal === "preview" && "modal_open"}`}
    >
      <div className="modal__content modal__content_type_image">
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close-btn"
        >
          <img src={close} alt="close-button" />
        </button>
        <img className="modal__image" src={card.imageUrl} alt={card.name} />
        <div className="modal__footer">
          <div className="modal__details">
            <p className="modal__caption">{card.name}</p>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button
            className="modal__delete"
            type="button"
            onClick={deleteCardClick}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
