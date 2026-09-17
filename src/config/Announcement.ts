/* Announcement configuration
 * Set `enabled` to true to show the announcement popup on site load.
 * Set to false to disable globally.
 * message can contain plain text or simple HTML.
 */

export const announcementConfig = {
  enabled: false, // Toggle to show/hide announcement globally
  title: 'Important Announcement',
  message:
    'Welcome! The site will be undergoing maintenance on 2026-09-01. Some features may be temporarily unavailable.',
  // localStorage key used to remember that a visitor dismissed the announcement
  localStorageKey: 'announcement_dismissed_v1',
};
