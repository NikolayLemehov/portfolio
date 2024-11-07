import { ReactElement } from 'react';
import { ExtLink } from 'common/components';

export const useProjectList = (): ReactElement[] => [
  <>
    <ExtLink to="https://nikolaylemehov.github.io/wallet_front">Wallet</ExtLink>, repositories (
    <ExtLink to="https://github.com/NikolayLemehov/wallet_front">front</ExtLink> &{' '}
    <ExtLink to="https://github.com/NikolayLemehov/wallet_end">back</ExtLink>),{' '}
    <ExtLink to="https://goit-wallet-back.onrender.com/api-docs/">api-docs</ExtLink>, [NodeJS, React, MongoDB,
    Swagger, i18next]. Role - Team Lead.
  </>,
  <>
    <ExtLink to="https://expo.dev/@nicklemster/goit-reactnative?serviceType=classic&distribution=expo-go&release-channel=goit-reactnative">
      ReactNativeApp
    </ExtLink>
    , <ExtLink to="https://github.com/NikolayLemehov/goit-hw-react-native">repository</ExtLink>, [React
    Native, Expo, Firebase].
  </>,
  <>
    <ExtLink to="https://nikolaylemehov.github.io/slimmom/">Slimmom</ExtLink>,{' '}
    <ExtLink to="https://github.com/NikolayLemehov/slimmom">repository</ExtLink>, [React, Redux Toolkit,
    Chakra-UI, Emotion, Formik, Axios]. Team project. Role - Team Lead.
  </>,
  <>
    <ExtLink to="https://nikolaylemehov.github.io/team-js/">Event booster</ExtLink>,{' '}
    <ExtLink to="https://github.com/NikolayLemehov/team-js">repository</ExtLink>, [JS, AJAX, Postman, HTML,
    SASS, Parcel] Application for choosing an event. Team project. Role - Team Lead, to do fetch and
    pagination classes.
  </>,
];
