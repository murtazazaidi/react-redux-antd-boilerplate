import ReactGA from 'react-ga';
import { GA_API } from 'configs/constants';

export const gaEvent = ({
  category, action, label = 'CLICKED', value,
}) => {
  if (GA_API) {
    ReactGA.event({
      category, // required
      action, // required
      label,
      value,
    });
  }
};

export const gaSet = (obj) => {
  if (GA_API) {
    ReactGA.set(obj);
  }
};
