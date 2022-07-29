export const event_click = (
  page,
  action,
  label,
  search_term,
) => {
  window.gtag('event', 'event_click', {
    event_page: page,
    event_action: action,
    event_label: label,
    search_term: search_term,
  });
};
