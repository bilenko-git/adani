export interface CarouselConfig {
  dots?: boolean;
  margin?: number;
  navText?: string[];

  // options
  items?: number;
  itemsDesktop?: number[];
  itemsDesktopSmall?: number[];
  itemsTablet?: number[];
  itemsTabletSmall?: any;
  itemsMobile?: number[];
  itemsCustom?: any;
  singleItem?: boolean;
  itemsScaleUp?: boolean;
  slideSpeed?: number;
  paginationSpeed?: number;
  rewindSpeed?: number;
  autoPlay?: any;
  stopOnHover?: boolean;
  navigation?: boolean;
  navigationText?: any;
  rewindNav?: boolean;
  scrollPerPage?: boolean;
  pagination?: boolean;
  paginationNumbers?: boolean;
  responsive?: boolean;
  responsiveRefreshRate?: number;
  responsiveBaseWidth?: any | string;
  baseClass?: string;
  theme?: string;
  lazyLoad?: boolean;
  lazyFollow?: boolean;
  lazyEffect?: any;
  autoHeight?: boolean;
  jsonPath?: any;
  jsonSuccess?: (data: any) => void;
  dragBeforeAnimFinish?: boolean;
  mouseDrag?: boolean;
  touchDrag?: boolean;
  addClassActive?: boolean;
  loop?: boolean;
  nav?: boolean;
  transitionStyle?: any;

  // callbacks
  beforeUpdate?: (params?: any) => void;
  afterUpdate?: (params?: any) => void;
  beforeInit?: (params?: any) => void;
  afterInit?: (params?: any) => void;
  beforeMove?: (params?: any) => void;
  afterMove?: (params?: any) => void;
  afterAction?: (params?: any) => void;
  startDragging?: (params?: any) => void;
  afterLazyLoad?: (params?: any) => void;
}
