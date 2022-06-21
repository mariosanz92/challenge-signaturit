const size: ISize = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
};

export const device: ISize = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

interface ISize {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
}

export default device;
