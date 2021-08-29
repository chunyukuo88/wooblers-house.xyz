import ReactGa from 'react-ga';

export const fireGoogleAnalyticsEvent = (category, action) => {
  ReactGa.event({
    category,
    action,
  });
};
