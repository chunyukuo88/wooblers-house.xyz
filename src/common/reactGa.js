import ReactGa from 'react-ga';

export const fireGoogleAnalyticsEvent = (categoryStr, actionStr) => {
  ReactGa.event({
    category: categoryStr,
    action: actionStr,
  });
};
