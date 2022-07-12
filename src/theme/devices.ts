enum DeviceSize {
  tablet = "768px",
  laptop = "1024px",
}

export const device = {
  tablet: `(min-width: ${DeviceSize.tablet})`,
  laptop: `(min-width: ${DeviceSize.laptop})`,
} as const;
