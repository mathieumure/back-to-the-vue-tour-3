const domParser = new DOMParser();

export const getContent = async moment => {
  const pageId = moment.locale("fr").format("MMMM_YYYY");
  const response = await fetch(
    `https://fr.wikipedia.org/api/rest_v1/page/html/${pageId}`
  );
  const rawData = await response.text();
  const dateSection = moment.local("fr").format("D MMMM");
  const document = domParser.parseFromString(rawData, "text/html");
  const allSectionTitle = document.querySelectorAll("h3");
  const events = [];
  allSectionTitle.forEach(node => {
    if (node.textContent.includes(dateSection)) {
      node.nextElementSibling.childNodes.forEach(node => {
        events.push(node.textContent);
      });
    }
  });
  if (events.length > 0) {
    return events;
  }

  const allEvents = document.querySelectorAll("li");
  allEvents.forEach(node => {
    if (
      node.textContent.includes(dateSection) &&
      !node.textContent.startsWith("↑")
    ) {
      events.push(node.textContent);
    }
  });

  return events;
};
