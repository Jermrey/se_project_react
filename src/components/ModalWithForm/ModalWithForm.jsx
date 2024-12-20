import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  titleText,
  closeActiveModal,
  isOpen,
  handleOverlay,
  onSubmit,
}) {
  return (
    <div onClick={handleOverlay} className={`modal ${isOpen && "modal_open"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{titleText}</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        />
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
