import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

//создаем  в index.html  div , куда будет  встроена модалка  и  выбираем его
const modalRoot = document.querySelector('#modal-root');
console.log(modalRoot);

export default class Modal extends Component {
  componentDidMount() {
    //когда   смонтировалось,  вешаем слушатель  для закрытия  по escape
    window.addEventListener('keydown', this.onEscapeHandler);
  }
  componentWillUnmount() {
    //когда  закрываем убираем слушател с  клав
    window.removeEventListener('keydown', this.onEscapeHandler);
  }
  //обработчик  клика на  бекдроп для закрытия
  handleBackdrop = e => {
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
      // вызываем  ф-ю,  которая  указана в props    модалки который прописан  в Аpp -  onClose
      this.props.onClose();
    }
  };

  onEscapeHandler = e => {
    console.log(e.code);
    if (e.code === 'Escape') {
      // вызываем  ф-ю,  которая  указана в props    модалки который прописан  в Аpp -  onClose
      this.props.onClose();
    }
  };
  ///при рендере  создется  портал , где становится модалка,   в  скобках  -  что  ставим,   куда

  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.handleBackdrop}>
        <div className={s.modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}
