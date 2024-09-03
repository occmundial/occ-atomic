import React from 'react';
import AppButton from '../AppButton';

const utmSources = {
  mobileWeb: 'mobile_web_',
  smartBanner: 'smart_banner',
  footer: 'footer'
};

export const IOSApp = () => (
  <AppButton
    show
    href={`https://apps.apple.com/app/apple-store/id581420468?pt=1629020&mt=8&ct=${utmSources.mobileWeb}${utmSources.footer}`}
    title="Consigue la APP en la App Store"
    img={`https://cdn-h4.occ.com.mx/images/common/app-ios.svg`}
    imgAlt="ios"
  />
);

export const AndroidApp = () => (
  <AppButton
    show
    href={`https://play.google.com/store/apps/details?id=mx.com.occ&referrer=utm_source%3D${utmSources.mobileWeb}${utmSources.footer}`}
    title="Consigue la APP en Google Play"
    img={`https://cdn-h4.occ.com.mx/images/common/app-android.svg`}
    imgAlt="and"
  />
);

export const Certificate = () => (
  <a
    href="https://sellosdeconfianza.org.mx/MuestraCertificado.php?NUMERO_SERIE=MD_w088"
    target="_blank"
    title="AMIPICI"
    rel="noopener noreferrer"
  >
    <img
      src={`https://cdn-h4.occ.com.mx/images/common/sello_de_confianza.svg`}
      alt="cert"
      width={99}
      height={40}
      loading="lazy"
    />
  </a>
);

export const AppGallery = () => (
  <img
    src="https://cdn-h4.occ.com.mx/images/common/app-gallery.svg"
    width="134"
    height="40"
    alt="app-gallery"
    loading="lazy"
  />
);
