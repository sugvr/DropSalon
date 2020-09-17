import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const photos = [
  {
    src: process.env.PUBLIC_URL + '/GalleryImages/deo1.jpg',
    width: 3,
    height: 4
  },
  {
    src: process.env.PUBLIC_URL + '/GalleryImages/deo2.jpg',
    width: 3,
    height: 4
  },
  {
    src: process.env.PUBLIC_URL + '/GalleryImages/deo3.jpg',
    width: 3,
    height: 4
  },
  {
    src: process.env.PUBLIC_URL + '/GalleryImages/deo4.jpg',
    width: 3,
    height: 4
  },
  {
    src: process.env.PUBLIC_URL + '/GalleryImages/deo5.jpg',
    width: 3,
    height: 4
  },
  {
    src: process.env.PUBLIC_URL + '/GalleryImages/deo6.jpg',
    width: 3,
    height: 4
  }
];

function Dedos() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
export default Dedos;
