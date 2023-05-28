import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './PreviewDialog.css';

const baseWrapperClassName = 'preview-dialog__wrapper';
const baseOverlayClassName = 'preview-dialog__overlay';
const baseHeaderClassName = 'preview-dialog__header';
const baseContentClassName = 'preview-dialog__content';

export type PreviewDialogProps = PropsWithChildren<{
  /**
   * @param wrapperClassName
   */
  wrapperClassName?: string;
  /**
   * @param overlayClassName
   */
  overlayClassName?: string;
  /**
   * @param headerClassName
   */
  headerClassName?: string;
  /**
   * @param contentClassName
   */
  contentClassName?: string;
  testProp?: string;
}>;

const PreviewDialog: React.FC<PreviewDialogProps> = ({
  wrapperClassName,
  overlayClassName,
  headerClassName,
  contentClassName,
  children
}) => {
  return ReactDOM.createPortal(
    <div className={classNames(baseWrapperClassName, wrapperClassName)}>
      <div className={classNames(baseOverlayClassName, overlayClassName)} />
      <header className={classNames(baseHeaderClassName, headerClassName)} />
      <main className={classNames(baseContentClassName, contentClassName)}>{children}</main>
    </div>,
    document.body
  );
};

PreviewDialog.propTypes = {
  wrapperClassName: PropTypes.string,
  overlayClassName: PropTypes.string,
  headerClassName: PropTypes.string,
  contentClassName: PropTypes.string
};

export default PreviewDialog;
