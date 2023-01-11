import * as basicLightbox from 'basiclightbox';

export const Modal = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

instance.show();
