import React, { Fragment, useState, useRef, useEffect } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Dialog } from 'primereact/dialog';
import {
  Row,
  Col,
} from "reactstrap";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import "react-lazy-load-image-component/src/effects/blur.css";

function ImageWithModal ({title, keyItem, className,src}){
  
  const [zoomMode, setZoomMode] = useState(false);
  const zoomToggle = (event) => {
    setZoomMode(!zoomMode)
  };
  return (
    <Fragment>  
         <img
        alt={keyItem}
        key={keyItem}
        className={className}
        onClick={zoomToggle}
        src={src}
        />   
      <Dialog dismissableMask={true} modal={zoomMode} header={title} visible={zoomMode} className="imageModal" onHide={zoomToggle}>
         
              {zoomMode===true&&
               <Row className="m-3 mt-0">
                  <img width="500" alt={keyItem} key={keyItem} src={ src}  />
              </Row>  
              }
              
      </Dialog>
  </Fragment>
  );
};

export default ImageWithModal;
