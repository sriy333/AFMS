const protocol = window.location.protocol + '//';
const host_temp = window.location.host;
export const environment = {
  production: true,
  home: protocol + host_temp,
};
