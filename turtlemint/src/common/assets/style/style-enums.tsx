import variables from "./_variables.module.scss";

export const BREAKPOINTS = {
  MOBILE: variables.intendedFigmaMobile,
  TABLET: variables.tablet,
  LARGE: variables.large,
  DESKTOP: variables.desktop,
  EXTRA_LARGE: variables.extraLarge,
  EXTRA_EXTRA_LARGE: variables.extraExtraLarge,
  INTENDED_FIGMA_DESIGN_SIZE_FOR_MOBILE: variables.intendedFigmaMobile,
  INTENDED_FIGMA_DESIGN_SIZE_FOR_DESKTOP: variables.intendedFigmaDesktop,
  CUSTOM_BREAKPOINT: variables.customBreakpoint,
};

export const DEVICE = {
  mobile: `(max-width: ${BREAKPOINTS.MOBILE})`,
  large: `(max-width: ${BREAKPOINTS.TABLET})`,
  tablet: `(max-width: ${BREAKPOINTS.TABLET})`,
  desktop: `(max-width: ${BREAKPOINTS.DESKTOP})`,
  custom: `(max-width: ${BREAKPOINTS.CUSTOM_BREAKPOINT})`,
  customMin: `(min-width: ${BREAKPOINTS.CUSTOM_BREAKPOINT})`,
  tabletMin: `(min-width: ${BREAKPOINTS.TABLET})`,
};
