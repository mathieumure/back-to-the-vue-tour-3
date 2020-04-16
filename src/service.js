const domParser = new DOMParser();

export const getContent = async moment => {
  const pageId = moment.locale('fr').format('MMMM_YYYY');
  const response = await fetch(`https://fr.wikipedia.org/api/rest_v1/page/segments/${pageId}`);
  const rawData = await response.json();
  const dateSection = moment.local('fr').format('YYYY-MM-DD');
  const document = domParser.parseFromString(rawData.segmentedContent, 'text/html');
  const allRawEvents = document.querySelector(`[datetime="${dateSection}"]`).parentNode.nextElementSibling;
  const events = [];
  allRawEvents.childNodes.forEach(node => {
      events.push(node.textContent)
  });

  return events;
}