export const event_click = (page, action, label, search_term, icon_id) => {
  window.gtag('event', 'event_click', {
    event_page: page,
    event_action: action,
    id: icon_id,
    event_label: label,
    search_term: search_term,
  });
};
