import * as basicLightbox from 'basiclightbox';
import { ModalBlock, Overlay } from './Modal.styled';

export const Modal = () => {
  return (
    <Overlay>
      <ModalBlock>
        <img src="" alt="" />
      </ModalBlock>
    </Overlay>
  );
};

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

instance.show();
