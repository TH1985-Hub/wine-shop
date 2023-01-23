import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Loader.module.scss';

function Loader(props) {
    return (
      <div className={cx(styles.container, 'noPrint')}>
        <div className={cx(
          styles.spinnerWrap,
          {[styles.spinnerWrapHidden]: !props.isLoaderVisible}
        )}>
          <div className={styles.spinner}>
            <div className={styles.spinnerBox1}>
              <div className={styles.spinnerItem11} />
              <div className={styles.spinnerItem12} />
            </div>
            <div className={styles.spinnerBox2}>
              <div className={styles.spinnerItem21} />
              <div className={styles.spinnerItem22} />
            </div>
          </div>
        </div>
      </div>
    );
}

Loader.propTypes = {
  isLoaderVisible: PropTypes.bool.isRequired
};

export default Loader;
