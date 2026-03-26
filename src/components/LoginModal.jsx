function LoginModal({ isOpen, onClose, onLogin }) {
  if (!isOpen) return null; // Pokud není otevřeno, nevykresluj nic

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Přihlášení správce</h3>
        <input type="password" placeholder="Zadejte heslo..." id="admin-pass" />
        <div className="modal-buttons">
          <button onClick={() => onLogin()}>Přihlásit</button>
          <button onClick={onClose}>Zrušit</button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
