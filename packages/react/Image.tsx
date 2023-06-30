import { useState } from 'react';
import { PreviewDialog, PreviewDialogProps } from './PreviewDialog';
import PropTypes from 'prop-types';

export type ImageProps = {
  /**
   * @param src
   * Image path
   */
  src: string;
  /**
   * @param alt
   * Image description
   */
  alt?: string;
  /**
   * @param height
   * Image height
   */
  height?: string | number;
  /**
   * @param width
   * Image width
   */
  width?: string | number;
  /**
   * @param previewProps
   * preview props
   */
  previewProps?: Omit<PreviewDialogProps, 'visible'>;
};

const ImageComponent: React.FC<ImageProps> = ({ src, alt, height, width, previewProps }) => {
  /**
   * TODO
   * once preview group is implemented, take the value from the shared context
   * if the image/video components are used within preview group then don't enable individual preview
   */
  const isUsedInGroup: boolean = false;

  const [isShowPreview, setIsShowPreview] = useState(false);

  const openPreview = () => {
    setIsShowPreview(true);
  };

  return (
    <>
      <img src={src} alt={alt} height={height} width={width} onClick={openPreview} />

      {!isUsedInGroup && (
        <PreviewDialog visible={isShowPreview} {...previewProps}>
          <img src={src} alt={alt} />
        </PreviewDialog>
      )}
    </>
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default ImageComponent;
